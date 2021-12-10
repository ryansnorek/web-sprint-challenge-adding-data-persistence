const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getProjects();
        res.json(projects);
        
    } catch(e) { next(e) }
})

router.post('/', (req, res, next) => {
    console.log('POST connected....')
})

module.exports = router;
