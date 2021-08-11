const generate = require('../index')
const base62 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split('')

console.log(generate(48, base62))
