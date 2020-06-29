import path from 'path'

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'teste',
      user: 'postgres',
      password: '2410'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  }
};
