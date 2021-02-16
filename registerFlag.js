/**
 * Register a flag
 *
 * @param {string} code Country code or module name
 * @param {*} data Flags
 */
function registerFlag(code, data) {
  flags[toCountryCode(code)] = data
}
