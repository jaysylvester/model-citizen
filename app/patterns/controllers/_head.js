// _head controller

'use strict'

module.exports = {
  handler: handler
}

// default action
async function handler(params, context, emitter) {
  let metaData = await app.models._head[params.route.controller]()

  emitter.emit('ready', {
    content: {
      metaData: metaData,
      tracking: app.config.citizen.mode === 'production' ? true : false
    }
  })
}
