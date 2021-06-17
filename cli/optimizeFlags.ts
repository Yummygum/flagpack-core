import { optimize, Plugin } from 'svgo'
import shell from 'shelljs'
import { promisify } from 'util'
import ora from 'ora'
import fs from 'fs'

// Convert to promises
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

/**
 * Config for SVGO.
 *
 * @see https://github.com/svg/svgo
 */
const config: {
  plugins: Plugin[]
} = {
  plugins: [
    'cleanupAttrs',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertTransform',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupIDs',
    'cleanupNumericValues',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'prefixIds',
    'mergePaths',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions'
  ]
}

/**
 * Optimize a flag file.
 * Uses SVGO, according to the config
 *
 * @param {string} flag - The path to the flag file.
 */
async function optimizeFlag(flag: string): Promise<void> {
  // Start the spinner
  const spinner = ora(`Optimizing flag ${flag}`).start()

  // Read the data of the flag file
  const flagData = await readFile(flag, 'utf8')

  // Optimize the svg using SVGO
  const result = optimize(flagData, { path: flag, ...config });

  // Save the optimized data to the file
  await writeFile(flag, result.data)

  // Complete the spinner
  spinner.succeed(`Optimized ${flag}`)
}

/**
 * Optimize all flags.
 *
 * This method reads the dist folder of flags
 * And then calls optimizeFlag for all flags
 */
async function optimizeFlags() {
  // Get all files in the flags folder
  const files = shell.ls(`./lib/flags/**/*.svg`)

  // Loop through flags and optimize each
  for (let i = 0; i < files.length; i += 1) {
    await optimizeFlag(files[i])
  }
}

optimizeFlags()
