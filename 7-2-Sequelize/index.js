const express = require('express');
const app = express();
const sequelize = require('./config.js');

//console.log(process.env['SOCKET_PATH'])

sequelize.authenticate().then(() => {console.log('Sequelize connected')}).catch(err => console.log(err));

app.listen(3000, () => console.log('Server started on port 3000'));

const Employee = require('./models/employee.js');
const Department = require('./models/department.js');

Department.hasMany(Employee, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});
// It means a department model has many employee models
