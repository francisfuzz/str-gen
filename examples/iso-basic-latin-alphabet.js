const generate = require('../index')
const isoBasicLatinAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')

console.log(generate(64, isoBasicLatinAlphabet))
