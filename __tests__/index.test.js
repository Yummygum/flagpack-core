import { isoToCountryCode } from '../index'

describe('Test if the different type of isoCodes work', () => {
  test('Should return country code (Alpha-2)', () => {
    const isoCode = 'SE'
    const countryCode = isoToCountryCode(isoCode)

    expect(countryCode).toBe('SE')
  })

  test('Should return country code (Alpha-3)', () => {
    const isoCode = 'SWE'
    const countryCode = isoToCountryCode(isoCode)

    expect(countryCode).toBe('SE')
  })

  test('Should return country code (Numeric)', () => {
    const isoCode = '752'
    const countryCode = isoToCountryCode(isoCode)

    expect(countryCode).toBe('SE')
  })
})

describe('Tests if returning different type of keys works properly', () => {
  test('Tests if alpha2 works', () => {
    const isoCode = '752'
    const typeOfKey = 'alpha2'

    const countryCode = isoToCountryCode(isoCode, typeOfKey)

    expect(countryCode).toBe('SE')
  })

  test('Tests if alpha3 works', () => {
    const isoCode = '752'
    const typeOfKey = 'alpha3'

    const countryCode = isoToCountryCode(isoCode, typeOfKey)

    expect(countryCode).toBe('SWE')
  })

  test('Tests if numeric works', () => {
    const isoCode = '752'
    const typeOfKey = 'numeric'

    const countryCode = isoToCountryCode(isoCode, typeOfKey)

    expect(countryCode).toBe('752')
  })
})

describe('Tests the function with invalid values', () => {
  test('Test with invalid iso code', () => {
    const isoCode = '000'

    expect(() => { isoToCountryCode(isoCode) })
      .toThrow("Cannot read property 'alpha2' of undefined")
  })

  test('Test with no iso code', () => {
    expect(isoToCountryCode()).toBeUndefined()
  })
})
