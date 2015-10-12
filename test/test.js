'use strict'

var test = require('tape')
var getClassesFromHtml = require('..')


var html = '<body class="foo  bar">' +
  '<span title="title" class="\tfoobar\t baz">hi</span>' +
  '<h1 CLASS=\'another-class\'>Woot woot</h1>' +
'</body>'

test('get-classes-from-html', function (t) {
  t.plan(1)

  t.deepEqual(
    getClassesFromHtml(html),
    ['foo', 'bar', 'foobar', 'baz', 'another-class']
  )
})
