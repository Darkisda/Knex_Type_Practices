import * as Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.alterTable('orders', table => {
        table.boolean('completed').defaultTo(false)
        table.boolean('deleted_at').defaultTo(false)
    })
}


export async function down(knex: Knex) {
    return knex.schema.alterTable('orders', table => {
        table.dropColumns('completed', 'deleted_at')
    })
}

