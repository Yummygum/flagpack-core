const fs = require('fs')
const { promisify } = require('util');

const readDirPromise = promisify(fs.readdir)
const writeFilePromise = promisify(fs.writeFile)
const PATH = './svg/l'

const dummyObj = obj => ({
  "countryName": "",
  "alpha-2": obj.code,
  "alpha-3": "",
  "numeric": ""
})

readDirPromise(PATH)
  .then(files => {
    const countryCodes = files
      .map(fileName => fileName.replace(/.svg/g, ''))
      .map(code => dummyObj({ code }))
    return countryCodes
  })
  .then(writeToJsonFile)
  .catch(err => console.log(err))


function writeToJsonFile(countryList) {
  writeFilePromise('countryCodeList.json', JSON.stringify(countryList), 'utf8')
}