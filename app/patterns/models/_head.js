// _head model

'use strict'

module.exports = {
  index: index,
  'form-demo': formDemo
}

async function index() {
  // Not really necessary in this case, but if this were pulling from a database, you'd want to use await here.
  const metaData = await function () {
    return {
      title:       'Index Title',
      description: 'Index description',
      keywords:    'index keywords'
    }
  }

  return metaData
}

async function formDemo() {
  // Not really necessary in this case, but if this were pulling from a database, you'd want to use await here.
  const metaData = await function () {
    return {
      title:        'citizen form demo',
      description:  '',
      keywords:     ''
    }
  }

  return metaData
}
