const generate = require('../index')
const hexadecimalCharset = '0123456789abcdef'.split('')

console.log(generate(64, hexadecimalCharset))
