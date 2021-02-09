import { flagList } from './flagList'
import * as flags from './flags/allFlags'

export { isoToCountryCode } from './isoToCountryCode'

function imageUrl(assetCode, size) {
  const formatAssetCode = assetCode.replace('-', '_')
  try {
    return flags[formatAssetCode][size]
  } catch {
    throw new Error(`No flag found for ${assetCode} / size ${size}`)
  }
}

export {
  imageUrl
}
