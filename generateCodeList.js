const fs = require('fs')
const { promisify } = require('util');
const Tabletop = require('tabletop')

const writeFilePromise = promisify(fs.writeFile)
const WRITE_PATH = 'countryCodeList.json'
const SPREADSHEET_KEY = '1RpyCWefa5ugVbQJGtcOEAtBzYvcNYIBNlIgoTXBIwVw'

let countryListCodes

promisifyTableTop()
  .then(writeToJsonFile)

function writeToJsonFile(countryList) {
  countryListCodes = countryList
  writeFilePromise(WRITE_PATH, JSON.stringify(countryList), 'utf8')
}

function promisifyTableTop() {
  return new Promise(resolve => {
    Tabletop.init({ 
      key: SPREADSHEET_KEY,
      simpleSheet: true,
      callback: data => resolve(data)
    })
  })
}

export default countryListCodes