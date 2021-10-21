'use strict'

const logger = require('../src/middleware/logger.js');


describe('Testing the logging middleware', () => {

  let req = {method: 'GET'};
  let res = {};
  let next = jest.fn(); // a jest "spy"
  console.log = jest.fn();

  it('should be able to log a method', () => {

    // actually use our logger
    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('GET');
    expect(next).toHaveBeenCalled();
    // expect(next).toHaveBeenCalledWith('Error text');
  });
});