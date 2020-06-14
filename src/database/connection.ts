import knex from 'knex'
import path from 'path'

const connection = knex({
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
    useNullAsDefault: true,
})

export default connection