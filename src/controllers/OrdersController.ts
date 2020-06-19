import { Request, Response } from 'express'

import knex from '../database/connection'

class OrdersController {
    
    async index(request: Request, response: Response) {
        try{

            const result = await knex('orders').where('deleted_at', null)

            return response.json(result)
            
        } catch (err) {

            return response.status(400).json(err)

        }
    }

    async create(request: Request, response: Response) {
        try {
            
            const { description } = request.body
            const { client_id } = request.params

            const newOrder = {
                description,
                client_id
            }

            const trx = await knex.transaction()

            await trx('orders').insert(newOrder)

            await trx.commit()

            return response.status(200).json({okay: true})

        } catch (err) {
            
            return response.status(400).json

        }
    }

    async update(request: Request, reponse: Response) {
        try {
            
            const { description, completed } = request.body
            const { order_id } = request.params

            const trx = await knex.transaction()

            await trx('orders').update({description, completed})
                .where('orders.order_id', order_id )

            await trx.commit()
            
            return reponse.status(200).json({okay: true})

        } catch (err) {

            return reponse.status(400).json(err)

        }
    }

    async delete(request: Request, response: Response) {
        
        const { order_id } = request.params

        try {

            const trx = await knex.transaction()

            await trx('orders')
                .where('orders.order_id', order_id)
                .update('deleted_at', new Date())

            trx.commit()

            return response.status(200).json({okay:true})

        } catch (err) {
            
            return response.status(400).json(err)

        }
    }

}

export default new OrdersController()