import { Request, Response } from 'express'

import knex from '../database/connection'

class OrdersController {
    
    async index(request: Request, response: Response) {
        try{

            const result = await knex('orders')

            return response.json(result)
            
        } catch (err) {
            
            return response.status(400).json(err)

        }
    }

}

export default new OrdersController()