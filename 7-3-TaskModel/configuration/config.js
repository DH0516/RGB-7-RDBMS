const credentials = require('./credentials');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    credentials.dbname, 
    credentials.username, 
    credentials.password, 
    {dialect: 'mysql'}
);



module.exports = sequelize;