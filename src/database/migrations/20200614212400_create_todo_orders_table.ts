import * as Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.createTable('toDoOrders', table => {
        table.increments('to-do_id').primary()
        table.string('tasks').notNullable()
        table.integer('status').defaultTo(0)

        table.integer('order_id')
            .references('orders.order_id')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())

    })
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('toDoOrders')
}

