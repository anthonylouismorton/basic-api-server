'use strict'
require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const EmployeeModel = require('./Employee2.js');
const LocationModel = require('./Location2.js');
// sqliteDatbase = sqlite:memory
// postgresDatabase = 'postgresql://localhost:5432/talk';
// for folks the need permissions: `postgresql://username:pass@localhost:5432/db-name
let DATABASE_URL = process.env.DATABASE_URL

const sequelizeInstance = new Sequelize(DATABASE_URL);

const Employee2Table = EmployeeModel(sequelizeInstance, DataTypes);
const Location2Table = LocationModel(sequelizeInstance, DataTypes);

Location2Table.hasMany(Employee2Table, {foreignKey: 'lastName', sourceKey: 'id'})
Employee2Table.belongs(Location2Table, {foreignKey: 'lastName', targetKey: 'id'})

module.exports = {
  db: sequelizeInstance,
  Employees: Employee2Table,
  Locations: Location2Table,
};
