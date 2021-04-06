// app start

'use strict'

global.app = require('citizen')

// Get static file last modified times to populate cache buster variables
const fs = require('fs'),
      path = require('path')
app.config.cacheBuster = {
  css: fs.statSync(path.resolve(__dirname, '../web/min/site.css')).mtime.toString().replace(/[ :\-()]/g, ''),
  js:  fs.statSync(path.resolve(__dirname, '../web/min/site.js')).mtime.toString().replace(/[ :\-()]/g, '')
}

app.start({
  citizen: {
    mode          : 'development',
    http: {
      hostname    : '',
      port        : 8080
    },
    cache: {
      static      : true
    },
    compression: {
      enable      : true
    },
    layout: {
      controller  : '+_layout'
    }
  }
})
