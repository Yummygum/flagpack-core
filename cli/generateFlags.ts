import shell from 'shelljs'
import { IFlagEntry } from '../src/countryCodeList'
import { countryCodeList } from './countryCodeList'
import ora from 'ora'

// The output directory of the flags
const distDir = './lib/flags'

/**
 * Object containing all flags, with Alpha 2 as key
 * @example {
 *   AD: {
 *     "countryName": "Andorra",
 *     "alpha2":"AD",
 *     "alpha3":"AND",
 *     "numeric":"020"
 *   }
 * }
 */
interface ICountryObject {
  [key: string]: IFlagEntry
}

const countryObject: ICountryObject = {}
countryCodeList.map((country) => {
  countryObject[country.alpha2] = country
})

/**
 * Clean up the dist folder of the flags.
 * This method cleans up the dist folder and creates the sub directories for flag sizes
 */
function cleanDist() {
  const distSpinner = ora('Cleaning dist folder').start()

  // Remove the dist folder flags
  shell.rm('-rf', distDir)

  // Create the directories
  shell.mkdir(distDir)
  shell.mkdir(`${distDir}/s`)
  shell.mkdir(`${distDir}/m`)
  shell.mkdir(`${distDir}/l`)

  distSpinner.succeed()
}

/**
 * This method copies the flags from the src to dist.
 * It also creates 3 variants of the flags:
 * - Alpha2
 * - Alpha3
 * - Numeric
 *
 * @param size The size to copy the flags for
 */
function copyFlagSize(size: 'l' | 'm' | 's'): void {
  // Start the spinner
  const sizeSpinner = ora(`Copying flags for ${size}`).start()
  const errors: string[] = []

  // Get all flags for this size
  shell.ls(`./svg/${size}/*.svg`).forEach((file) => {
    sizeSpinner.text = `Copying ${file}`

    // Get only the filename of the flag
    const fileNameOnly = file.replace(`./svg/${size}/`, '')

    // Split the file name so we can use only the name
    const splitName = fileNameOnly.split('.')

    // Get the country data of this flag
    const country = countryObject[splitName[0]]

    // Country data doesn't exist for the flag (this should never be the case)
    if (typeof country === 'undefined') {
      errors.push(`ERR: Could not find country from countryList for ${splitName[0]}`)
      return
    }

    // Create Alpha 2 file
    shell.cp(file, `${distDir}/${size}/${country.alpha2}.svg`)

    // Create Alpha 3 file
    if (typeof country.alpha3 !== 'undefined') {
      shell.cp(file, `${distDir}/${size}/${country.alpha3}.svg`)
    }

    // Create Numeric
    if (typeof country.numeric !== 'undefined') {
      shell.cp(file, `${distDir}/${size}/${country.numeric}.svg`)
    }
  })

  if (errors.length > 0) {
    sizeSpinner.fail(`Failed to copy all flags for ${size}
      ${errors.join('\n      ')}
    `)
  } else {
    sizeSpinner.succeed(`Copied flags for ${size}`)
  }
}

/**
 * Group function that generates the flags in the dist folder.
 */
function generateFlags() {
  cleanDist()

  copyFlagSize('s')
  copyFlagSize('m')
  copyFlagSize('l')
}

generateFlags()
