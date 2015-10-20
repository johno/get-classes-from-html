import test from 'ava'
import getClassesFromHtml from './'

const html = '<body class="foo  bar">' +
  '<span title="title" class="\tfoobar\t baz">hi</span>' +
  '<h1 CLASS=\'another-class\'>Woot woot</h1>' +
'</body>'

test('get-classes-from-html', t => {
  t.plan(1)

  t.same(
    getClassesFromHtml(html),
    ['foo', 'bar', 'foobar', 'baz', 'another-class']
  )
})

test('handles no classes gracefully', t => {
  t.plan(1)

  t.same(getClassesFromHtml(''), [])
})
