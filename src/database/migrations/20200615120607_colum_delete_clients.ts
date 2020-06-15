import * as Knex from "knex";


export async function up(knex: Knex) {
    return knex.schema.alterTable('clients', table => {
        table.timestamp('deleted_at')
    })
}


export async function down(knex: Knex) {
    return knex.schema.alterTable('clients', table => {
        table.dropColumn('deleted_at')
    })
}

