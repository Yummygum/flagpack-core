import codeList from './countryCodeList.json'
import flags from './flags'

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

export { codeList, isoToCountryCode, imageUrl, flags }