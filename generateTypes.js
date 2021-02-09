const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const countryList = require('./countryCodeList.json')

const writeFilePromise = promisify(fs.writeFile)

function generateCodeList() {
  const codes = Array.from(countryList, (code) => code.alpha2)

  return codes
}

function writeCodeListToFile(codes) {
  writeFilePromise('./flagList.js', `export const flagList = ${JSON.stringify(codes)}`)
}

writeCodeListToFile(generateCodeList())
