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
    console.log('POST connected....')
});

module.exports = router;