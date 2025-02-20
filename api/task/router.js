const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    Tasks.getTasks()
        .then(task => {
            res.json(task)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Tasks.addTask(req.body)
    .then(newTask => {
        res.json(newTask)
    })
    .catch(next)
});

module.exports = router;