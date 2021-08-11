const generate = require('../index')
const decimalCharset = '0123456789'.split('')

console.log(generate(64, decimalCharset))
