'use strict'

const express = require('express');
const app = express();
const logger = require('../middleware/logger.js');
const locationRoute = require('../routes/location.js');
const employeeRoute = require('../routes/employee.js');
const error404 = require('../error-handlers/404.js');
const error500 = require('../error-handlers/500.js');
//const apiRouter = require('../routes/api.js');

app.use(express.json());
app.use(logger);

app.use(locationRoute);
app.use(employeeRoute);
//app.use('/api', apiRouter)

app.use(error404);
app.use(error500);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log('server running'))
  }
}