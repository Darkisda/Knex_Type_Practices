import * as Knex from "knex";

const {onUpdateTrigger} = require ('../../../knexfile')


export async function up(knex: Knex) {
    return knex.schema.createTable('clients', table => {
        table.increments('client_id').primary()
        table.string('clientName').notNullable()
        table.string('clientLast_name').notNullable()
        table.string('clientEmail').notNullable()
        table.string('clientWhatsapp').notNullable()
        table.string('clientCity').notNullable()
        table.string('clientUF', 2).notNullable()

        table.integer('user_id')
            .references('users._id')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    }).then(()=> knex.raw(onUpdateTrigger('clients')))

}


export async function down(knex: Knex) {
    return knex.schema.dropTable('clients')
}

