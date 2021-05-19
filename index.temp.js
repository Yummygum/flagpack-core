import codeList from './countryCodeList.json'
import flags from './flags'

function isoToCountryCode(isoCode, keyToGet = 'alpha2') {
  if (isoCode !== undefined) {
    const alpha2Code = codeList.find((countryObj) => (
      countryObj.alpha2 === isoCode
      || countryObj.alpha3 === isoCode
      || countryObj.numeric === isoCode
    ))[keyToGet]
    return alpha2Code
  }

  throw new Error('This code returns undefined, see https://www.flagpack.xyz/docs/flag-index for all the available codes.')
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
  codeList,
  isoToCountryCode,
  imageUrl,
  flags
}
