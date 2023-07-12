const Sequelize = require('sequelize');
const sequelize = require('../config.js');

const Employee = sequelize.define('employee', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    FirstName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    LastName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Salary: {
        type: Sequelize.FLOAT(10, 2),
        allowNull: false
    }
});
module.exports = Employee;