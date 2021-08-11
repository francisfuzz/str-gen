# str-gen

[![Node.js CI](https://github.com/francisfuzz/str-gen/actions/workflows/node.js.yml/badge.svg)](https://github.com/francisfuzz/str-gen/actions/workflows/node.js.yml)

"str-gen", short for "string generator". This is a utility package that generates a variety of random strings.

## Usage

```js
const generate = require('str-gen')
const SIMPLE_CHARSET = ['s', 'i', 'm', 'p', 'l', 'e']

console.log(generate(10, SIMPLE_CHARSET)) // => 'lsmsmepssp'
```

Check out the [`examples/`](https://github.com/francisfuzz/str-gen/tree/main/examples) directory for more interesting cases.
