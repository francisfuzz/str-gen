/**
 * Determines an object's `[[Class]]` value is using `Object.prototype.toString`.
 *
 * @param {string} type - The expected type for `obj`.
 * @param {any} obj - Literally any JavaScript object.
 * @return {boolean}
 * @example is('Boolean', true)
 * => true
 */
module.exports = function is (type, obj) {
  const clas = Object.prototype.toString.call(obj).slice(8, -1)
  return obj !== undefined && obj !== null && clas === type
}
