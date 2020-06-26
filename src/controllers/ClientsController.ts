import { Request, Response } from 'express'

import knex from '../database/connection'

class ClientsController {

    async index(request: Request, reponse: Response) {
        
        try {

            const result = await knex('clients').where('deleted_at', null)

            return reponse.json(result)

        } catch (err) {

            return reponse.status(400).json(err)

        }
    }

    async listByID(request: Request, response: Response) {

        try {

            const { page = 1 } = request.query

            const { user_id } = request.params

            const users = await knex('users')

            const findUser = users.find(user => user._id == user_id)

            if(findUser === undefined) {
                return response.json({message:"Cannot find UserID"})
            }
            else {
                const query = knex('clients')
                    .limit(5)
                    .offset( (Number(page)-1 )*5 )

                    
                query.where('clients.user_id', user_id)
                    .join('users', 'users._id', '=', 'clients.user_id')
                    .select('clients.*', 'users.userName')
                    .where('clients.deleted_at', null)
                
                const [countClients] = await knex('clients')
                    .count()
                    .where('clients.user_id', user_id)
                    
                const result = await query

                response.header('X-Total-Count', String(countClients.count))
                return response.json(result)
            }

        } catch (err) {

            return response.status(400).json(err)

        }
    }

    async create(request: Request, response: Response) {
        
        try {

            const {
                clientName,
                clientLast_name,
                clientEmail,
                clientWhatsapp,
                clientCity,
                clientUF,
            } = request.body

            const { user_id } = request.params
    
            const NewClient = {
                clientName,
                clientLast_name,
                clientEmail,
                clientWhatsapp,
                clientCity,
                clientUF,
                user_id
            }


            const trx = await knex.transaction()

            await trx('clients').insert(NewClient)

            await trx.commit()

            return response.status(201).json({okay:true})

        } catch (err) {

            return response.status(400).json(err)

        }
    }

    async delete(request: Request, response: Response) {
        
        const { client_id } = request.params

        try {
            
            const trx = await knex.transaction()

            await trx('clients')
                .where('clients.client_id', client_id)
                .update('deleted_at', new Date())

            trx.commit()

            return response.status(200).json({okay: true})

        } catch (err) {

            return response.json(err)

        }
    }

    async update(request: Request, response: Response) {
        try {

            const {
                clientEmail,
                clientWhatsapp,
            } = request.body

            const { client_id } = request.params

            const trx = await knex.transaction()

            await trx('clients').update({clientEmail, clientWhatsapp})
                .where('clients.client_id', client_id)

            await trx.commit()

            return response.status(200).json({okay: true})

        } catch(err) {

            return response.json(err)

        }
    }
}

export default new ClientsController()