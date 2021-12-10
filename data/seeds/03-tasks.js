exports.seed = async function(knex) {
  return knex('tasks').insert([   
    { 
      project_id: 1,
      task_notes: "",
      task_description: "build backend"
    },
    { 
      project_id: 1,
      task_notes: "",
      task_description: "build frontend"
    },
    { 
      project_id: 1,
      task_notes: "",
      task_description: "test and deploy"
    },
    { 
      project_id: 2,
      task_notes: "",
      task_description: "sell website and rake in $$$"
    },
    { 
      project_id: 2,
      task_notes: "",
      task_description: "get batmobile"
    },
    { 
      project_id: 2,
      task_notes: "",
      task_description: "beat up criminals until batgirl shows up"
    },
    { 
      project_id: 3,
      task_notes: "",
      task_description: "look through recipe book and decide"
    },
    { 
      project_id: 3,
      task_notes: "",
      task_description: "prep and cook desired food"
    },
    { 
      project_id: 3,
      task_notes: "",
      task_description: "sit down in triumph and enjoy"
    }
  ]);
};