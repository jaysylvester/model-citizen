// _head model

'use strict'

module.exports = {
  index: index,
  'form-demo': formDemo
}

function index() {
  // Not really necessary in this case, but if this were pulling from a database, you'd want to use Promises/async here.
  return new Promise(resolve => {    
    resolve({
      title:       'Index Title',
      description: 'Index description',
      keywords:    'index keywords'
    })
  })
}

function formDemo() {
  return new Promise(resolve => {
    resolve({
      title:        'citizen form demo',
      description:  '',
      keywords:     ''
    })
  }) 
}
