const path = require('path')
require('dotenv').config({ 
   path: path.resolve(__dirname, './.env') 
})

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERDB, process.env.PASSWORD, {dialect: "mysql", host: "localhost"});

module.exports = sequelize;