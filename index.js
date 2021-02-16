import { flagList } from './flagList'
// import * as flags from './flags'

export { isoToCountryCode } from './isoToCountryCode'

const flags = {}

/** Convert module name to country code */
const toCountryCode = (name) => name.replace('_', '-')
/**
 * Register a flag
 *
 * @param {string} code Country code or module name
 * @param {*} data Flags
 */
function registerFlag(code, data) {
  flags[toCountryCode(code)] = data
}

/**
 * Register a flag library
 *
 * @param {*} lib Map of country codes/module names to flags
 */
function registerFlagLibrary(lib) {
  Object.entries(lib).forEach(([code, data]) => registerFlag(code, data))
}

function imageUrl(assetCode, size) {
  const formatAssetCode = assetCode.replace('-', '_')
  try {
    return flags[formatAssetCode][size]
  } catch {
    throw new Error(`No flag found for ${assetCode} / size ${size}`)
  }
}

export {
  imageUrl,
  registerFlag,
  registerFlagLibrary
}
