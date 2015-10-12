'use strict'

module.exports = function getClassesFromHtml (html) {
  if (typeof html !== 'string') {
    throw new TypeError('get-classes-from-html expected a string')
  }

  var classes = []
  html.match(/class=("([^"]*)")|class=('([^']*)')/ig).forEach(function (classString) {
    var classesFromString = classString.replace(/class=/i, '').replace(/'|"/g, '').match(/\S+/g)
    classes = classes.concat(classesFromString)
  })

  return classes
}
