import codeList from './countryCodeList.json'

type Country = {
  countryName: string;
  alpha2: string;
  alpha3?: string;
  numeric?: number;
}

type SupportedIsoCode = 'alpha2' | 'alpha3' | 'numeric'

const convertIsoCode = (code: string | number, keyToGet: SupportedIsoCode = 'alpha2') : string => {
  if (code !== undefined) {
    const newCode: string = codeList.find((countryObj) => (
      countryObj.alpha2 === code
      || countryObj.alpha3 === code
      || countryObj.numeric === code
    ))[keyToGet]
    if (!newCode) {
      throw new Error('This code returns undefined, see https://www.flagpack.xyz/docs/flag-index for all the available codes.')
    } else {
      return newCode
    }
  }
  throw new Error('No code has been provided. Please provided a country name, alpha2, alpha3 or numeric value.')
}

module.exports = {
  codeList,
  convertIsoCode
}