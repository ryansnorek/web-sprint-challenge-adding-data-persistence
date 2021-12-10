const express = require('express');

const server = express();

server.use(express.json());

server.use((e, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: e.message,
        stack: e.stack
    })
})

module.exports = server;
