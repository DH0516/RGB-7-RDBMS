const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./configuration/config.js'); // Sequelize configuration
const tasks_router = require('./routes/tasks.js'); // API router 
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

sequelize.authenticate().then(() => 
{console.log('Sequelize connected \n')}).catch(err => console.log(err));

sequelize.sync().then((result)=>
{console.log(result)}).catch((err)=>{console.log(err);});

app.use('/tasks', tasks_router);
app.get('/', (req, res) => {res.send('Hello World!')});

app.listen(3000, () => {console.log(`Server listening on port ${port}!`)});








