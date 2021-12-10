const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getResources();
        res.json(resources);
        
    } catch(e) { next(e) }
});

router.post('/', (req, res, next) => {
    console.log('POST connected....')
});

module.exports = router;