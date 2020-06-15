import * as Knex from "knex";

export async function seed(knex: Knex){
    return knex("orders").del()
        .then(() => {
            return knex("orders").insert([
                {
                    description: 'Descrição teste de um pedido',
                    client_id: 1
                }
            ]);
        });
};
