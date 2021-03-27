const fs = require('fs')
const path = require('path')
// Sequelize class
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

// Connecting to DB
// Sequelize object which is our database, stored in sequelize
// ENV variables from config file passed to Sequelize object
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// helper function: defines models for db
fs
// read through current directory and give array of different files
  .readdirSync(__dirname)
  // filter out index file
  .filter((file) =>
    file !== 'index.js'
  )
  // take every model file
  .forEach((file) => {
    // declare model
    // import path to sequelize
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    // db.User = model
    db[model.name] = model
  })

// fill db object with arguments
// useful variables to get access to Sequelize object
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
