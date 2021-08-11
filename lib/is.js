/**
 * Determines an object's `[[Class]]` value is using `Object.prototype.toString`.
 * Source: https://github.com/BonsaiDen/JavaScript-Garden/blob/6cc502ea143782abea28259dba07ea9a0b987fb2/doc/en/types/typeof.md#the-class-of-an-object
 * License: https://github.com/BonsaiDen/JavaScript-Garden/blob/master/LICENSE
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
