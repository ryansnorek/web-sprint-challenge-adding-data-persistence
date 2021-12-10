const db = require('../../data/dbConfig');

const getProjects = () => db('projects');

const addProject = (newProject) => {
    return db('projects')
        .insert(newProject)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id)
                .first()
        });
};

module.exports = {
    getProjects,
    addProject
}
