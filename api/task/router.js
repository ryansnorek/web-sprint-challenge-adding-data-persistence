const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks();
        res.json(tasks);
        
    } catch(e) { next(e) }
})
router.post('/', (req, res, next) => {
    console.log('POST connected....')
})

module.exports = router;