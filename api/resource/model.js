const db = require('../../data/dbConfig');

const getResources = () => db('resources');

const addResource = (newResource) => {
    return db('resources')
        .insert(newResource)
        .then(([resource_id]) => {
            return db('resources')
                .where('resource_id', resource_id)
                .first()
        });
};

module.exports = {
    getResources,
    addResource
}