const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const countryList = require('./countryCodeList.json')

const writeFilePromise = promisify(fs.writeFile)
const FLAGS_PATH = 'flags'

writeToFlagsJsFiles(countryList)

function hasCode(country) {
  return !!countryCode(country)
}
function countryCode(country) {
  return country.alpha2
}
function codeToModule(code) {
  return code.replace('-', '_')
}

function writeToFlagsJsFiles(countryList) {
  fs.mkdirSync(FLAGS_PATH, { recursive: true })
  const sizes = ['l', 'm', 's']
  const countries = countryList.filter(hasCode)
  countries.forEach((country) => {
    const code = countryCode(country)
    writeFilePromise(
      path.join(FLAGS_PATH, `${code}.js`),
      [
        ...sizes.map((size) => `import ${size} from '../svg/${size}/${code}.svg'`),
        `export default {${sizes.join(',')}}`
      ].join('\n'),
      'utf8'
    )
  })
  writeFilePromise(
    path.join(FLAGS_PATH, 'index.js'),
    [
      ...countries
        .map(countryCode)
        .map((code) => `import ${codeToModule(code)} from './${code}'`),
      `export default {${
        countries
          .map(countryCode)
          .map(codeToModule)
          .join(',')
      }}`
    ].join('\n'),
    'utf8'
  )
}
