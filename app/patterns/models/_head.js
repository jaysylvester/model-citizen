// _head model

// Not really necessary in this case, but if this were pulling from a database, you'd want to use async/await here.
export const index = () => {
  const metaData = function () {
    return {
      title:       'Index Title',
      description: 'Index description',
      keywords:    'index keywords'
    }
  }

  return metaData
}

// Not really necessary in this case, but if this were pulling from a database, you'd want to use async/await here.
export const formDemo = async () => {
  const metaData = await function () {
    return {
      title:        'citizen form demo',
      description:  '',
      keywords:     ''
    }
  }

  return metaData
}
