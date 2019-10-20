const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const countryList = require ('./countryCodeList.json');

const writeFilePromise = promisify(fs.writeFile);
const FLAGS_PATH = 'flags';
const SIZES = ['l', 'm', 's'];

writeToFlagsJsFiles(countryList);

function hasCode(country) {
  return !!countryCode(country);
}
function countryCode(country) {
  return country.alpha2;
}
function codeToModule(code) {
  return code.replace('-', '_');
}
function flagsExist(code) {
  const missing = SIZES
    .map(size => `./svg/${size}/${code}.svg`)
    .some(file => !fs.existsSync(file));
  if (missing) {
    console.warn(`Missing files for ${code}`);
  }
  return !missing;
}

function writeToFlagsJsFiles(countryList) {
  fs.mkdirSync(FLAGS_PATH, {recursive: true});
  const countries = countryList
    .filter(hasCode)
    .map(countryCode)
    .filter(flagsExist);

  // Flag modules
  countries.forEach(code => {
    writeFilePromise(
      path.join(FLAGS_PATH, code + '.js'), 
      [
        ...SIZES.map(size =>  `import ${size} from '../svg/${size}/${code}.svg'`),
        `export const ${codeToModule(code)} = {${SIZES.join(',')}}`
      ].join('\n'),
      'utf8'
    );
  });

  // Whole flag library
  writeFilePromise(
    path.join(FLAGS_PATH, 'index.js'), 
    countries
      .map(code => `export {${codeToModule(code)}} from './${code}'`)
      .join('\n'), 
    'utf8'
  );

  // Module list for Rollup
  writeFilePromise(
    'flagsModules.json', 
    JSON.stringify([
      path.join(FLAGS_PATH, 'index.js'),
      ...countries.map(code => path.join(FLAGS_PATH, `${code}.js`))
    ]),
    'utf8'
  );
}
