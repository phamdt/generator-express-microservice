var config = {}

config[process.env.NODE_ENV || 'development'] = {
  client: 'postgresql',
  connection: {
    host: process.env.POSTGRES_HOST,
    port: 5432,
    database: process.env.POSTGRES_DATABASE,
    user:     process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: '<%= modelName.toLowerCase()%>_service_migrations'
  }
};

module.exports = config;
