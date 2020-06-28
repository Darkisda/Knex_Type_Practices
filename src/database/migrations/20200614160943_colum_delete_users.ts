import * as Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.alterTable('users', table => {
        table.boolean('deleted_at').defaultTo(false)
    })
}


export async function down(knex: Knex) {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('deleted_at')
    })
}