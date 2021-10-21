'use strict'

const Location = (sequelizeInstance, DataTypes) => sequelizeInstance.define(
  'location', {
    location: {

    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manager: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
)

module.exports = Location;