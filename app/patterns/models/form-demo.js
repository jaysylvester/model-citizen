// form-demo model

'use strict'

module.exports = {
  validate: validate
}


function validate(form) {
  // Not really necessary in this case, but if you were inserting this data into a database, you'd want to use Promises/async here.
  return new Promise(resolve => {
    if ( !form.first_name || !form.last_name ) {
      resolve({ validated: false, error: 'All fields are required.', data: form })
    } else {
      resolve({ validated: true, data: form })
    }
  })
}
