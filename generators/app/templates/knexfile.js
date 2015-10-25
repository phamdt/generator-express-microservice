// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: '<%= modelName.toLowerCase()%>_development',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '<%= modelName.toLowerCase()%>_migrations'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: '<%= modelName.toLowerCase()%>_test',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '<%= modelName.toLowerCase()%>_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: '<%= modelName.toLowerCase()%>_staging',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '<%= modelName.toLowerCase()%>_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: '<%= modelName.toLowerCase()%>_production',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '<%= modelName.toLowerCase()%>_migrations'
    }
  }

};
