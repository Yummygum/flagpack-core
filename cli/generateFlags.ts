import shell from 'shelljs'
import { countryCodeList } from './countryCodeList'
import ora from 'ora'

const distDir = './dist/flags'

interface IFlagEntry {
  countryName: string
  alpha2: string
  alpha3?: string
  numeric?: string
}

interface ICountryObject {
  [key: string]: IFlagEntry
}

const countryObject: ICountryObject = {}
countryCodeList.map((country) => {
  countryObject[country.alpha2] = country
})

function cleanDist() {
  shell.rm('-rf', distDir)
  shell.mkdir(distDir)
  shell.mkdir(`${distDir}/s`)
  shell.mkdir(`${distDir}/m`)
  shell.mkdir(`${distDir}/l`)
}

function copyFlagSize(size: 'l' | 'm' | 's') {
  const sizeSpinner = ora(`Copying flags for ${size}`).start()
  const errors: string[] = []

  shell.ls(`./svg/${size}/*.svg`).forEach((file) => {
    sizeSpinner.text = `Copying ${file}`
    const fileNameOnly = file.replace(`./svg/${size}/`, '')
    const splitName = fileNameOnly.split('.')
    const country = countryObject[splitName[0]]

    if (typeof country === 'undefined') {
      errors.push(`ERR: Could not find country from countryList for ${splitName[0]}`)
      return
    }

    // Alpha 2 file
    shell.cp(file, `${distDir}/${size}/${country.alpha2}.svg`)

    // Alpha 3 file
    if (typeof country.alpha3 !== 'undefined') {
      shell.cp(file, `${distDir}/${size}/${country.alpha3}.svg`)
    }

    // Numeric
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

function generateFlags() {
  const distSpinner = ora('Cleaning dist folder').start()
  cleanDist()
  distSpinner.succeed()


  copyFlagSize('s')
  copyFlagSize('m')
  copyFlagSize('l')
}

generateFlags()
