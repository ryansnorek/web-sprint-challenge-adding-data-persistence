const express = require('express');

// -------- PROJECTS -------- //
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('GET connected....')
})

router.post('/', (req, res, next) => {
    console.log('POST connected....')
})

module.exports = router;
