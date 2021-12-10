const db = require('../../data/dbConfig');

const getTasks = async () => {
    // SELECT * FROM tasks as t
    // LEFT JOIN projects as p
    // ON p.project_id = t.project_id;
    const taskProjects = await db('tasks as t')
        .leftJoin('projects as p', {
            'p.project_id':'t.project_id'
        })
    return taskProjects.map(tp => {
        return ({
            task_id: tp.task_id,
            task_description: tp.task_description,
            task_notes: tp.task_notes,
            task_completed: tp.task_completed,
            project_name: tp.project_name,
            project_description: tp.project_description
        })
    }) 
};

module.exports = {
    getTasks,
}