'use strict'

const Employee = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
  'employee', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}) 

module.exports = Employee;