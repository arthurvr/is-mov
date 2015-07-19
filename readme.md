# is-mov [![Build Status](https://travis-ci.org/arthurvr/is-mov.svg?branch=master)](https://travis-ci.org/arthurvr/is-mov)

> Check if a Buffer/Uint8Array is a MOV file


## Install

```
$ npm install --save is-mov
```


## Usage

```js
var isMov = require('is-mov');
var read = require('fs').readFileSync;

isMov(read('pony.mov'));
//=> true
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
