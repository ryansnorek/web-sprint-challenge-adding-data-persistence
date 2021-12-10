const convert = (num) => num === 1 ? true : false;

function boolifyProject(project) {
    return ({
        ...project,
        project_completed: convert(project.project_completed)
    })
}
function boolifyTask(task) {
    return ({
        ...task,
        task_completed: convert(task.task_completed)
    })
}

module.exports = {
    convert,
    boolifyProject,
    boolifyTask
}