'use strict'
require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const EmployeeModel = require('./Employee.js');
const LocationModel = require('./Location.js');

let DATABASE_URL = process.env.DATABASE_URL

const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, options);

const EmployeeTable = EmployeeModel(sequelizeInstance, DataTypes);
const LocationTable = LocationModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  Employees: EmployeeTable,
  Locations: LocationTable,
};
