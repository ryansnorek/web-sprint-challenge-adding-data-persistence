const db = require('../../data/dbConfig');

const boolifyNum = (num) => num === 1 ? true : false;

const getProjects = async () => {
    const projects = await db('projects');
    return projects.map(p => {
        const num = p.project_completed;
        return ({
            ...p,
            project_completed: boolifyNum(num)
        })
    })
};

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
