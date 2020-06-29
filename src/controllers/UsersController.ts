import { Request, Response } from 'express'

import knex from '../database/connection'

import User from '../models/User'
import UserInterface from '../utils/interfaces/UserInterface'

class UserController {
    async index(request: Request, reponse: Response) {
        try {

            const result = await knex('users').where('deleted', false)

            return reponse.json(result)

        } catch (err) {

            return reponse.status(400).json(err)

        }
    }

    async create(request: Request, reponse: Response) {
        
        const {
            userName,
            userLast_name,
            userCompany,
            userEmail,
            userWhatsapp,
            userCity,
            userUF
        } = request.body

        try {
            
            const trx =  await knex.transaction()

            const user = new User(userName, userLast_name, userCompany, userEmail, userWhatsapp, userCity, userUF)

            await trx('users').insert(user)

            await trx.commit()

            return reponse.status(201).json({okay: true})

        } catch (err) {

            return reponse.status(400).json(err)

        }
    }

    async update(request: Request, reponse: Response) {
        
        const { userCompany, userEmail, userWhatsapp } = request.body
        const { user_id } = request.params

        try {

            const trx = await knex.transaction()

            await trx('users').update({userCompany, userEmail, userWhatsapp})
                .where('users._id', user_id)
            
            await trx.commit()

            return reponse.status(200).json({okay: true})

        } catch (err) {

            return reponse.status(400).json(err)

        }
    }

    async delete(request: Request, reponse: Response) {
        
        const { user_id } = request.params

        try {
            
            const trx = await knex.transaction()

            await trx<UserInterface>('users')
                .where('users._id', user_id)
                .update('deleted_at', true)

            trx.commit()

            return reponse.status(200).json({okay: true})
            
        } catch (err) {
            
            return reponse.status(400).json(err)

        }
    }
}

export default new UserController()