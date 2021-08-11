const generate = require('../index')

// https://en.wikipedia.org/wiki/Base62
const base62 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('')

console.log(generate(48, base62))
