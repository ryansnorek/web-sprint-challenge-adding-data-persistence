const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    Resources.getResources()
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Resources.addResource(req.body)
        .then(newResource => {
            res.json(newResource)
        })
        .catch(next)
});

module.exports = router;