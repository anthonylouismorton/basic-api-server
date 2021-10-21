'use strict'

module.exports = function (request, response, next) {
  response.status(404)
  response.end();
  
}