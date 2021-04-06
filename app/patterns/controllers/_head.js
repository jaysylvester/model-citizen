// _head controller

'use strict'

module.exports = {
  handler : handler
}

// default action
async function handler(params) {
  let metaData = await app.models._head[params.route.controller]()

  return {
    content: {
      metaData: metaData,
      tracking: app.config.citizen.mode === 'production' ? true : false
    }
  }
}
