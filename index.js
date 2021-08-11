const is = require('./lib/is')

/**
 * Generates a random string of characters of some length.
 * Maximum specified length and characters' length is up to 10,000.
 *
 * @param {number} length - The length of the string to generate.
 * @param {string[]} charset - The characters to use for generating the string.
 * @return {string}
 * @example generate(10, ['a', 'b', 'c'])
 * => 'abcabcabca'
 */
module.exports = function generate (length, charset) {
  const MAX_STRING_LENGTH = 10000
  const MAX_ARRAY_LENGTH = 10000

  let result = ''

  // Return early if any of these conditions are true.
  if (
  // Type checks
    !is('Number', length) ||
        !is('Array', charset) ||
        // Length checks
        length <= 0 ||
        length > MAX_STRING_LENGTH ||
        charset.length === 0 ||
        charset.length > MAX_ARRAY_LENGTH) {
    return result
  }

  while (result.length < length) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    // Type check: `characters[randomIndex]` must be a string.
    if (!is('String', charset[randomIndex])) {
      continue
    }
    result += charset[randomIndex]
  }

  // Each element in `characters` could have a length greater than one.
  // We truncate the result to `length` characters.
  return result.slice(0, length)
}
