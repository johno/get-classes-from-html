# get-classes-from-html [![Build Status](https://secure.travis-ci.org/johnotander/get-classes-from-html.png?branch=master)](https://travis-ci.org/johnotander/get-classes-from-html) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Get classes from an HTML string

## Installation

```bash
npm install --save get-classes-from-html
```

## Usage

```javascript
var getClassesFromHtml = require('get-classes-from-html')

getClassesFromHtml('<body class="bg-purple tomato"></body>')  // => ['bg-purple', 'tomato']
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
