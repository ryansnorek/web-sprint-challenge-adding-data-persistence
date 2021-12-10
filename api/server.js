const express = require('express');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use((e, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: e.message,
        stack: e.stack
    })
})

module.exports = server;
