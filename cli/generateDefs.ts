import fs from 'fs'
import { promisify } from 'util'
import { countryCodeList } from './countryCodeList'

const writeFile = promisify(fs.writeFile)
const appendFile = promisify(fs.appendFile)

const alpha2List = countryCodeList.map((country) => `'${country.alpha2}'`)
const alpha3List = countryCodeList.map((country) => `'${country.alpha3}'`)
const numericList = countryCodeList.map((country) => `'${country.numeric}'`)

const fileName = 'src/types.ts'

async function generateTypeValues(name: string, keys: (string | undefined)[]) {
  console.log(`Generating types for ${name}`)
  const filteredKeys = keys.filter((value) => value !== `'undefined'`)
  console.log(`Found ${filteredKeys.length} keys`)
  const keysString = filteredKeys.join(' | ')
  appendFile(fileName, keysString)
}

async function generateTypes() {
  await writeFile(fileName, '/** All valid values for a flag\n * @see https://www.flagpack.xyz/docs/flag-index\n */\n')
  await appendFile(fileName, `export type Flags = `)
  await generateTypeValues('Alpha2', alpha2List)
  await appendFile(fileName, ` | `)
  await generateTypeValues('Alpha3', alpha3List)
  await appendFile(fileName, ` | `)
  await generateTypeValues('Numeric', numericList)
}

generateTypes()
