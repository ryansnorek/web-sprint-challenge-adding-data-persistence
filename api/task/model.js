const db = require('../../data/dbConfig');

const getTasks = () => db('tasks');

module.exports = {
    getTasks,
}