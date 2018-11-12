// _header controller

'use strict'

module.exports = {
  handler: handler
}

// default action
function handler(params, context, emitter) {
  let copyrightDate = '2018',
      currentYear = new Date().getUTCFullYear()

  if ( currentYear > copyrightDate ) {
    copyrightDate += '-' + currentYear
  }

  emitter.emit('ready', {
    content: {
      copyrightDate: copyrightDate
    }
  })
}
