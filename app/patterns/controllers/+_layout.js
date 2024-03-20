// +_layout controller

// default action
export const handler = () => {
  return {
    public: {
      browsersyncEnabled: app.config.citizen.mode === 'development' ? true : false
    },
    include: {
      head: {
        controller: '_head'
      },
      header: {
        controller: '_header'
      },
      footer: {
        controller: '_footer'
      }
    }
  }
}
