const fs = require('fs')
const { promisify } = require('util')
const PapaParse = require('papaparse')
const fetchNode = require('node-fetch')
require('dotenv').config()

const writeFilePromise = promisify(fs.writeFile)
const WRITE_PATH = 'countryCodeList.json'

const { SPREADSHEET_KEY } = process.env
const { API_KEY } = process.env

function writeToJsonFile(countryList) {
  writeFilePromise(WRITE_PATH, JSON.stringify(countryList), 'utf8')
}

function writeToTypescriptFile(countryList) {
  writeFilePromise('./cli/countryCodeList.ts', `export const countryCodeList = ${JSON.stringify(countryList)}`, 'utf8')
}

function fetchSheet({
  spreadsheetId, sheetName, apiKey, complete
}) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`

  return fetchNode(url).then((response) => response.json().then((result) => {
    const data = PapaParse.parse(PapaParse.unparse(result.values), {
      header: true
    })

    complete(data)
  }))
}

function promisifyFetchSheetData() {
  return new Promise((resolve) => {
    fetchSheet({
      spreadsheetId: SPREADSHEET_KEY,
      sheetName: 'Main',
      apiKey: API_KEY,
      complete(results) {
        resolve(results.data)
        console.log(`Code list generated: ${results.data.length + 1} flags`)
      }
    })
  })
}

promisifyFetchSheetData().then((data) => {
  writeToJsonFile(data)
  writeToTypescriptFile(data)
})
