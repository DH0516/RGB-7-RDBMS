const Sequelize = require('sequelize');
const sequelize = require('../config.js');

const Department = sequelize.define('department', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    DepartmentName: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});



module.exports = Department;