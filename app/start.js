// app start

// node
import fs      from 'fs'
import path    from 'path'
// third party
import citizen from 'citizen'

global.app = citizen

// Get static file last modified times to populate cache buster variables
let cacheBuster = {
  css: fs.statSync(path.resolve(app.config.citizen.directories.app, '../web/min/site.css')).mtime.toString().replace(/[ :\-()]/g, ''),
  js:  fs.statSync(path.resolve(app.config.citizen.directories.app, '../web/min/site.js')).mtime.toString().replace(/[ :\-()]/g, '')
}

app.server.start({
  // citizen configuration, which you can put here or in /app/config/
  citizen: {
    mode          : 'development',
    http: {
      hostname    : '',
      port        : 3000
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
  },
  // application configuration
  cacheBuster     : cacheBuster,
  siteName        : 'Model Citizen'
})
