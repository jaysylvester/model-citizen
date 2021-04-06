// form-demo controller

'use strict'

module.exports = {
  handler : handler,
  submit  : submit
}

// default action
function handler() {}

async function submit(params) {
  let processedForm = await app.models['form-demo'].validate(params.form)

  if ( processedForm.validated ) {
    return {
      content: processedForm,
      view: 'confirmation'
    }
  } else {
    return {
      content: processedForm
    }
  }
}
