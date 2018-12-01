Read babel plugin handbook -> https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md

Try http://astexplorer.net/#/Pcw9baefXI for a visual understanding.

Special thank you to https://github.com/supreetpal/babel-plugin-boilerplate for the boilerplate work done. Thank you.

# babel-plugin-prefix-console-log

This is a library that allows you to append to any amount of arguments in the console log. a Prefix.
The default prefix is 'Bonify Rocks' where as you can specify in the .babelrc file the option prefix which
will append the prefix that you would like to you console.log.

## Example

**In**

```js
console.log('Hello');
```

**Out**

```js
console.log('Bonify RocksHello');
```

## Installation

```sh
$ npm install babel-plugin-prefix-console-log
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["prefix-console-log", {
    "prefix": "Whatever you want "
  }]
}
```

### Via CLI

```sh
$ babel --plugins prefix-console-log script.js
```

### Via Node API

```javascript
require("@babel/core").transform("code", {
  plugins: ["prefix-console-log"]
});
```