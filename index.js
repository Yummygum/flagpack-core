import codeList from './countryCodeList.json'

function isoToCountryCode(isoCode) {
  const alpha2Code = codeList.find(countryObj => (
    countryObj['alpha-2'] === isoCode || 
    countryObj['alpha-3'] === isoCode || 
    countryObj['numeric'] === isoCode
  ))['alpha-2']

  return alpha2Code
}

export { codeList, isoToCountryCode }