exports.seed = async function(knex) {
    return knex('projects').insert([   
      { 
        project_name: 'make website',
        project_description: "design and build a website for spiderman"
      },
      { 
        project_name: 'make love',
        project_description: "connect with someone"
      },
      { 
        project_name: 'make food',
        project_description: "decide on what to make and eat it"
      }
    ]);
  };
  