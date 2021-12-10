const db = require('../../data/dbConfig');
const { boolifyProject } = require('../helper');

const getProjects = async () => {
    const projects = await db('projects');
    return projects.map(p => boolifyProject(p, p.project_completed));
};

const addProject = async (newProject) => {
    const added = await db('projects')
        .insert(newProject)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id)
                .first()
        });
        return boolifyProject(added);
};

module.exports = {
    getProjects,
    addProject
}
