import { Request, Response } from 'express'

import knex from '../database/connection'

class ToDoController {
    
    async index(request: Request, response: Response) {
        try{

            const result = await knex('toDoOrders')

            return response.status(200).json(result)
            
        }catch (err) {

            return response.status(400).json(err)

        }
    }

    async list(request: Request, response: Response) {
        try {
            
            const { page = 1 } = request.query

            const { order_id } = request.params

            const query = knex('toDoOrders')
                .limit(5)
                .offset( (Number(page)-1 )*5 )

            query.where('toDoOrders.order_id', order_id)
                .join('orders', 'orders.order_id', '=', 'toDoOrders.order_id')
                .select('toDoOrders.*', 'orders.order_id')

            const [countToDo] = await knex('toDoOrders')
                .count()
                .where('toDoOrders.order_id', order_id)

            const result = await query

            response.header('X-Total-Count', String(countToDo.count))
            return response.status(200).json(result)

        } catch (err) {
            
            return response.status(400).json(err)

        }
    }

    async create(request: Request, response: Response) {
        
        try {

            const { order_id } = request.params
            const { tasks } = request.body

            const NewTodo = { tasks, order_id }

            const trx = await knex.transaction()

            await trx('toDoOrders').insert(NewTodo)

            await trx.commit()

            return response.status(201).json({okay: true})

        } catch (err) {
            
            return response.status(400).json(err)

        }
    }

    async update(request: Request, response: Response) {
        try {

            const { todo_id } = request.params
            const { status, tasks } = request.body

            const trx = await knex.transaction()
            
            if(status === true){
                
                await trx('toDoOrders')
                    .update('status', status)
                    .where('toDoOrders.to-do_id', todo_id)
            
            } else {

                await trx('toDoOrders')
                    .update({tasks})
                    .where('toDoOrders.to-do_id', todo_id)

            }

            await trx.commit()

            return response.status(200).json({message: 'okay'})

        } catch (err) {
            
            return response.status(400).json(err)

        }
    }

    async delete(request: Request, response: Response) {
        try {
            
            const { todo_id } = request.params

            const trx = await knex.transaction()

            await trx('toDoOrders')
                .where('to-do_id', todo_id)
                .del()

            await trx.commit()

            return response.status(200).json({okay: true})
        } catch (err) {
            
            return response.status(400).json(err)

        }
    }
}

export default new ToDoController()