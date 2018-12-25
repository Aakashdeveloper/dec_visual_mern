require('babel-register')({
    presets: ['env']
})

module.export = require('./server.js')