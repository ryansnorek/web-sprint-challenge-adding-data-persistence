const db = require('../../data/dbConfig');

const convert = (num) => num === 1 ? true : false;
const boolify = (task, arg) => {
    return ({
        ...task,
        task_completed: convert(arg)
    })
};

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
            task_completed: convert(tp.task_completed),
            project_name: tp.project_name,
            project_description: tp.project_description
        })
    }) 
};
const addTask = (newTask) => {
    return db('tasks')
        .insert(newTask)
        .then(([task_id]) => {
            return db('tasks')
                .where('task_id', task_id)
                .first()
        });
};

module.exports = {
    getTasks,
    addTask
}