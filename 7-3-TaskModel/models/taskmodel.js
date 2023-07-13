// model for task table
const sequelize = require('../configuration/config');
const Sequelize = require('sequelize');

const Task = sequelize.define('Task', {
    ID: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    date: { type: Sequelize.DATEONLY, allowNull: false },
    time: { type: Sequelize.DATE, allowNull: false },
    priority_level: { type: Sequelize.STRING, allowNull: false }, // critical, high, medium, low
    category: { type: Sequelize.STRING, allowNull: false },
    progress_level: { type: Sequelize.STRING, allowNull: false }, // Not Started, Started, Complete
}, {freezeTableName: true});

module.exports = Task;