import codeList from './countryCodeList.json'

/** Registered flags */
const flags = {}

/** Convert module name to country code */
const toCountryCode = name => name.replace('_', '-')

/**
 * Register a flag
 * 
 * @param {string} code Country code or module name
 * @param {*} data Flags
 */
function registerFlag(code, data) {
  flags[toCountryCode(code)] = data;
}

/**
 * Register a flag library
 * 
 * @param {*} lib Map of country codes/module names to flags
 */
function registerFlagLibrary(lib) {
  Object.entries(lib).forEach(([code, data]) => registerFlag(code, data))
}

function isoToCountryCode(isoCode, keyToGet = 'alpha2') {
  if(isoCode !== undefined) {
    const alpha2Code = codeList.find(countryObj => (
      countryObj.alpha2 === isoCode || 
      countryObj.alpha3 === isoCode || 
      countryObj.numeric === isoCode
    ))[keyToGet]
    return alpha2Code
  }

  console.error('This code returns undefined, see www.flagpack.xyz/docs/flag-index for all the available codes.')
}

function imageUrl(assetCode, size) {
  try {
    return flags[assetCode][size]
  } catch {
    console.error('No flag found for ' + assetCode + ' / size ' + size)
  }
}

export { codeList, isoToCountryCode, imageUrl, registerFlag, registerFlagLibrary }