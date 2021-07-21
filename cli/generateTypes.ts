import fs from 'fs'
import ora from 'ora'
import { promisify } from 'util'

import { countryCodeList } from '../src/countryCodeList'

// Convert to promises
const writeFile = promisify(fs.writeFile)
const appendFile = promisify(fs.appendFile)

// Create lists of the different keys
const alpha2List = countryCodeList.map((country) => `'${country.alpha2}'`)
const alpha3List = countryCodeList.map((country) => `'${country.alpha3}'`)
const numericList = countryCodeList.map((country) => `'${country.numeric}'`)

// Where should the type definitions be written to.
const fileName = 'src/types.ts'

/**
 * Convert the list of values to type values
 * @param name The group name of values
 * @param keys The keys to add to the type
 */
async function generateTypeValues(name: string, keys: (string | undefined)[]): Promise<void> {
  // Start a spinner
  const spinner = ora(`Generating types for ${name}`).start()

  try {
    // Remove any undefined keys
    const filteredKeys = keys.filter((value) => value !== `'undefined'`)

    // Turn the array into a string, example: AD | AB | AZ
    const keysString = filteredKeys.join(' | ')

    // Add the keys to the file
    appendFile(fileName, keysString)

    // Complete the spinner
    spinner.succeed()
  } catch (err: unknown) {
    if (err instanceof Error) {
      // Something went wrong, show the error to the user.
      spinner.fail(err.message)
    }
  }
}

/**
 * Group method to generate the types
 */
async function generateTypes() {
  // Create the documentation comment
  await writeFile(fileName, '/** All valid values for a flag\n * @see https://www.flagpack.xyz/docs/flag-index\n */\n')

  // Start the type definitions
  await appendFile(fileName, `export type Flags = `)

  // Write Alpha 2
  await generateTypeValues('Alpha2', alpha2List)
  await appendFile(fileName, ` | `)

  // Write Alpha 3
  await generateTypeValues('Alpha3', alpha3List)
  await appendFile(fileName, ` | `)

  // Write numeric
  await generateTypeValues('Numeric', numericList)
}

generateTypes()
