// form-demo controller

'use strict'

module.exports = {
  handler: handler,
  submit: submit
}

// default action
function handler(params, context, emitter) {
  emitter.emit('ready')
}

async function submit(params, context, emitter) {
  let processedForm = await app.models['form-demo'].validate(params.form)

  if ( processedForm.validated ) {
    emitter.emit('ready', {
      content: processedForm,
      view: 'confirmation'
    })
  } else {
    emitter.emit('ready', {
      content: processedForm
    })
  }
}
