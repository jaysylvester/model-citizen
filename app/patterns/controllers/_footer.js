// _header controller

'use strict'

module.exports = {
  handler : handler
}

// default action
function handler() {
  let copyrightDate = '2018',
      currentYear = new Date().getUTCFullYear()

  if ( currentYear > copyrightDate ) {
    copyrightDate += '-' + currentYear
  }

  return {
    content: {
      copyrightDate: copyrightDate
    }
  }
}
