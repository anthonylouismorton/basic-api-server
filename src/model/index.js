'use strict'
require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const EmployeeModel = require('./Employee.js');
const LocationModel = require('./Location.js');
// sqliteDatbase = sqlite:memory
// postgresDatabase = 'postgresql://localhost:5432/talk';
// for folks the need permissions: `postgresql://username:pass@localhost:5432/db-name
let DATABASE_URL = process.env.DATABASE_URL

const sequelizeInstance = new Sequelize(DATABASE_URL);

const EmployeeTable = EmployeeModel(sequelizeInstance, DataTypes);
const LocationTable = LocationModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  Employees: EmployeeTable,
  Locations: LocationTable,
};
