import * as Knex from "knex";

export async function seed(knex: Knex){
    return knex("users").del()
        .then(() => {
            return knex("users").insert([
                {
                    userName: 'admin',
                    userLast_name: 'master',
                    userCompany: 'default_company',
                    userEmail: 'default_email@email.com',
                    userWhatsapp: '+5584998059100',
                    userCity: 'Parelhas',
                    userUF: 'RN',
                }
            ]);
        });
};
