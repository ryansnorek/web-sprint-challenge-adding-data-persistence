const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(project => {
            res.json(project);
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Projects.addProject(req.body)
        .then(newProject => {
            res.json(newProject);
        })
        .catch(next)
});

module.exports = router;
