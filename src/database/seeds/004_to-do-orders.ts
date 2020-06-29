import * as Knex from "knex";

export async function seed(knex: Knex){
    return knex("toDoOrders").del()
        .then(() => {
            return knex("toDoOrders").insert([
                {
                    tasks: 'exemplo de task 1',
                    status: true,
                    order_id: 1,
                },
                {
                    tasks: 'exemplo de task 2',
                    order_id: 1,
                },
                {
                    tasks: 'exemplo de task 3',
                    order_id: 1,
                },
                {
                    tasks: 'exemplo de task 4',
                    status: true,
                    order_id: 1,
                },
            ]);
        });
};
