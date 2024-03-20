// _head controller

// default action
export const handler = (params) => {
  // Get the appropriate model based on the requested controller
  let metaData = app.models._head[params.route.controller]()

  return {
    public: {
      metaData: metaData
    }
  }
}
