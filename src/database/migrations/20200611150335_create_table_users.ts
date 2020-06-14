import * as Knex from "knex";

const {onUpdateTrigger} = require ('../../../knexfile')


export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('_id').primary()
        table.string('userName').notNullable()
        table.string('userLast_name').notNullable()
        table.string('userCompany').notNullable()
        table.string('userEmail').notNullable()
        table.string('userWhatsapp').notNullable()
        table.string('userCity').notNullable()
        table.string('userUF', 2).notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_ap').defaultTo(knex.fn.now())

    }).then(()=> knex.raw(onUpdateTrigger('users')))
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('users')
}