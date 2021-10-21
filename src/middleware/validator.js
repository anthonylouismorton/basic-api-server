'use strict'

module.exports = function (request, response, next) {
  let {name} = request.query;
  console.log(name , 'this is where it is coming from')

  if(name){
    next();
    
  }
  else{
    response.status(500)
    next('invalid request');
  }
  
}