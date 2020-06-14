import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    return knex("clients").del()
        .then(() => {
            return knex("clients").insert([
                {
                    clientName: 'client_test',
                    clientLast_name: 'last_name test',
                    clientEmail: 'email@email.com',
                    clientWhatsapp: '+5584998039100',
                    clientCity: 'Parelhas',
                    clientUF: 'RN',
                    user_id: 1
                }
            ]);
        });
};
