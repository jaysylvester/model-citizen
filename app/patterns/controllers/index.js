// index controller

'use strict'

module.exports = {
  handler : handler,
  cors: {
    // Each controller action has its own CORS headers
    handler: {
      'Access-Control-Allow-Origin': 'http://www.foreignhost.com',
      'Access-Control-Expose-Headers': 'X-My-Custom-Header, X-Another-Custom-Header',
      'Access-Control-Max-Age': 600,
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin'
    }
  }
}

// default action
// function handler() {}
const handler = async (params) => {

}
