const process = require('process')

function getPath() {
  return process.env.PATH
}

function isProduction() {
  return process.env.NODE_ENV == 'production'
}

module.exports = {
  getPath,
  isProduction
}
