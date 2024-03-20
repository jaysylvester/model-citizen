// formDemo controller

// default action
export const handler = () => {}

export const submit = (params) => {
  // Validate the form with the formDemo model
  let processedForm = app.models.formDemo.validate(params.form)

  // Return the results of form validation and show the appropriate view
  if ( processedForm.validated ) {
    return {
      public: processedForm,
      view: 'confirmation'
    }
  } else {
    return {
      public: processedForm
    }
  }
}
