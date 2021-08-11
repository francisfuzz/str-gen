# str-gen

[![Node.js CI](https://github.com/francisfuzz/str-gen/actions/workflows/node.js.yml/badge.svg)](https://github.com/francisfuzz/str-gen/actions/workflows/node.js.yml)

"str-gen", short for "string generator". This is a utility package that generates a variety of random strings.

## Usage

First, assuming that NPM is installed on your machine, create a new directory, navigate to it, and install the package using a command line interface (CLI) of your choice:

```shell
mkdir example-project
cd example-project
npm install @francisfuzz/str-gen
```

Then, create a file, say `example.js` and run it in your CLI as `node example.js`:

```js
const generate = require('@francisfuzz/str-gen')
const SIMPLE_CHARSET = ['s', 'i', 'm', 'p', 'l', 'e']

console.log(generate(10, SIMPLE_CHARSET)) // => 'lsmsmepssp'
```

Check out the [`examples/`](https://github.com/francisfuzz/str-gen/tree/main/examples) directory for more interesting cases.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).