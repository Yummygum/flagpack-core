import codeList from './countryCodeList.json'

function isoToCountryCode(isoCode, keyToGet = 'alpha2') {
  const alpha2Code = codeList.find(countryObj => (
    countryObj.alpha2 === isoCode || 
    countryObj.alpha3 === isoCode || 
    countryObj.numeric === isoCode
  ))[keyToGet]

  return alpha2Code
}

export { codeList, isoToCountryCode }