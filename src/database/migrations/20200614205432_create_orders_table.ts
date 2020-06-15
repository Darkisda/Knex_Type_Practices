import * as Knex from "knex";

const {onUpdateTrigger} = require ('../../../knexfile')


export async function up(knex: Knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('order_id').primary()
        table.string('description').notNullable()

        table.integer('client_id')
            .references('clients.client_id')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    }).then(()=> knex.raw(onUpdateTrigger('orders')))
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('orders')
}

