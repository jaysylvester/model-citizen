// formDemo model

export const validate = (form) => {
  if ( !form.first_name || !form.last_name ) {
    return {
      validated : false,
      error     : 'All fields are required.',
      data      : form
    }
  } else {
    return {
      validated : true,
      data      : form
    }
  }
}
