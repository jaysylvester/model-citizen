// _footer controller

// default action
export const handler = () => {
  return {
    public: {
      copyrightDate: new Date().getUTCFullYear()
    }
  }
}
