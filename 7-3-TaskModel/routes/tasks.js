// routes for tasks
const express = require('express');
const router = express.Router();
const Task = require('../models/taskmodel.js');

router.get('/get_all', (req, res) => {
    console.log("Get all tasks");
    Task.findAll({}).then((result) => {
        if (result.length == 0) { return res.status(404).send('GET: No tasks'); }
        else { return res.status(200).json({message: 'GET: Success', tasks: result}); }
    }).catch((err) => {
        res.status(500).send({error: err});
    });
});

router.post('/add_task', (req, res) => {
    Task.create({title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        priority_level: req.body.priority_level,
        category: req.body.category,
        progress_level: req.body.progress_level
    }).then((task) => {return res.status(200).json({message: 'POST: Success', task: task});})
    .catch((err) => {return res.status(500).send({error: err});});
});

router.patch('/edit_task/:id', (req, res) => {
    Task.findByPk(req.params.id).then((task) => {
        if (task) {
            for (let key in req.body) {
                task[key] = req.body[key];
            }
            task.save().then((task) => {
                return res.status(200).json({message: 'PATCH: Success edit', task: task});});
        }
        else {return res.status(404).json({message: 'PATCH: No tasks'});}
    })
    .catch((err) => {return res.status(500).send({error: err});});
});

router.get('/get-priority/:priority_level', (req, res) => {
    Task.findAll({where: {priority_level: req.params.priority_level}}).then((result) => {
        if (result.length == 0) { return res.status(404).send('GET: No tasks'); }
        else { return res.status(200).json({message: 'GET: Success', tasks: result}); }
    }).catch((err) => {
        res.status(500).send({error: err});
    });
});

router.get('/get-category/:category', (req, res) => {
    Task.findAll({where: {category: req.params.category}}).then((result) => {
        if (result.length == 0) { return res.status(404).send('GET: No tasks'); }
        else { return res.status(200).json({message: 'GET: Success', tasks: result}); }
    }).catch((err) => {
        res.status(500).send({error: err});
    });
});

router.get('/get-progress/:progress_level', (req, res) => {
    Task.findAll({where: {progress_level: req.params.progress_level}}).then((result) => {
        if (result.length == 0) { return res.status(404).send('GET: No tasks'); }
        else { return res.status(200).json({message: 'GET: Success', tasks: result}); }
    }).catch((err) => {
        res.status(500).send({error: err});
    });
});


module.exports = router;