exports.seed = async function(knex) {
  return knex('resources').insert([   
    { 
      resource_name: 'tech stack',
      resource_description: "react, pg, express, node"
    },
    { 
      resource_name: 'dates',
      resource_description: ""
    },
    { 
      resource_name: 'groceries',
      resource_description: ""
    }
  ]);
};