import codeList from './countryCodeList.json'

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

export { codeList, isoToCountryCode }