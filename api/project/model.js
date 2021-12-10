const db = require('../../data/dbConfig');

const convert = (num) => num === 1 ? true : false;
const boolify = (project, arg) => {
    return ({
        ...project,
        project_completed: convert(arg)
    })
};

const getProjects = async () => {
    const projects = await db('projects');
    return projects.map(p => boolify(p, p.project_completed));
};

const addProject = async (newProject) => {
    const added = await db('projects')
        .insert(newProject)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id)
                .first()
            
        });
        return boolify(added, added.project_completed)
};

module.exports = {
    getProjects,
    addProject
}
