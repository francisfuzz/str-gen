const generate = require('./index')
const {strictEqual, ok} = require('assert')

const EMPTY_STRING = ''
const EMPTY_CHARSET = []
const ABC_CHARSET = ['a', 'b', 'c']
const DIRTY_CHARSET = ['a', 1, false, [], 'd']

// Test: empty cases
const s1 = generate(0, EMPTY_CHARSET)
const s2 = generate(-1, EMPTY_CHARSET)
const s3 = generate(1, EMPTY_CHARSET)

// Test: unsupported types
const s4 = generate('a', ABC_CHARSET)
const s5 = generate(1, 1)
const s6 = generate(true, false)

strictEqual(s1, EMPTY_STRING)
strictEqual(s2, EMPTY_STRING)
strictEqual(s3, EMPTY_STRING)
strictEqual(s4, EMPTY_STRING)
strictEqual(s5, EMPTY_STRING)
strictEqual(s6, EMPTY_STRING)

// Test: ensure correct lengths
const s7 = generate(0, ABC_CHARSET)
const s8 = generate(1, ABC_CHARSET)
const s9 = generate(10, ABC_CHARSET)
const s10 = generate(10000, ABC_CHARSET)
const s11 = generate(10001, ABC_CHARSET)
const s12 = generate(-1, ABC_CHARSET)

strictEqual(s7.length, 0)
strictEqual(s8.length, 1)
strictEqual(s9.length, 10)
strictEqual(s10.length, 10000)
strictEqual(s11.length, 0)
strictEqual(s12.length, 0)

// Test: determine if generated string has at least one character from the charset
// Edge case: adapting this case for generating a string with a length less than the charset
// may result in a failure where the string doesn't have any characters from the charset.
// It's not great, but it's better than nothing.
const s13 = generate(100, ABC_CHARSET)
ok(s13.includes(ABC_CHARSET[Math.floor(Math.random() * ABC_CHARSET.length)]))

// Test: handles charsets whose elements are not all strings
const s14 = generate(10, DIRTY_CHARSET)
ok(s14)