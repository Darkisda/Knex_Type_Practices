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

    async list(request: Request, response: Response) {
        try {
            
            const {page = 1} = request.query

            const { client_id } = request.params

            const query = knex('orders')
                .limit(5)
                .offset( (Number(page)-1 )*5 )

            query.where('orders.client_id', client_id)
                .join('clients', 'clients.client_id', '=', 'orders.client_id')
                .select('orders.*', 'clients.clientName')
                .where('orders.deleted_at', null)

            const [countOrders] = await knex('orders')
                .count()
                .where('orders.client_id', client_id)

            const result = await query

            response.header('X-Total-Count', String(countOrders.count))
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

    async listDeleteds(request: Request, response: Response) {
        try {

            const orders = await knex('orders')
            let deletedsOrders = []

            orders.filter(order => {
                if(order.deleted_at !== null) {
                    deletedsOrders.push(order)
                }
            })

            return response.json(deletedsOrders)

        } catch (err) {

            return response.status(400).json(err)

        }
    }

    async ressurge(request: Request, response: Response) {
        try {
            
            const { order_id } = request.params

            const trx = await knex.transaction()

            await trx('orders')
                .where('orders.order_id', order_id)
                .update('deleted_at', true)

            return response.status(200).json({okay: true})

        } catch (err) {
            
            return response.status(400).json(err)

        }
    }

}

export default new OrdersController()