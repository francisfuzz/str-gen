const generate = require('../')
const SIMPLE_CHARSET = ['s', 'i', 'm', 'p', 'l', 'e']

console.log(generate(10, SIMPLE_CHARSET)) // => 'lsmsmepssp'
