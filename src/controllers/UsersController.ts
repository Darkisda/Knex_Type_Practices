import { Request, Response } from 'express'

import knex from '../database/connection'

import User from '../models/User'
import UserInterface from '../utils/interfaces/UserInterface'

class UserController {

    async index(request: Request, response: Response) {
        
        const { deleteds = false} = request.query

        try {

            if(deleteds) {
                const result = await knex('users').where('deleted', true)

                return response.json(result)
            }
            else {
                const result = await knex('users').where('deleted', false)

                return response.json(result)
            }

        } catch (err) {

            return response.status(400).json(err)

        }
    }

    async create(request: Request, response: Response) {
        
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

            return response.status(201).json({okay: true})

        } catch (err) {

            return response.status(400).json(err)

        }
    }

    async update(request: Request, response: Response) {
        
        const { userCompany, userEmail, userWhatsapp } = request.body
        const { user_id } = request.params

        try {
            
            const trx = await knex.transaction()

            await trx('users').update({userCompany, userEmail, userWhatsapp})
                .where('users._id', user_id)
                
            await trx.commit()

            return response.status(200).json({okay: true})

        } catch (err) {

            return response.status(400).json({message: "Empty fields"})

        }
    }

    async delete(request: Request, response: Response) {
        
        const { user_id } = request.params
        const user = await knex<UserInterface>('users')
        const findUser = user.find( user => user._id == user_id )

        try {

            if(findUser === undefined) {

                return response.status(400).json({message: "UserID dont exists"})
            
            } else {

                const trx = await knex.transaction()

                await trx('users')
                    .where('users._id', user_id)
                    .update('deleted', true)

                trx.commit()

                return response.status(200).json({okay: true})
            }
            
        } catch (err) {
            
            return response.status(400).json({message: "Não foi possível deletar o usário"})

        }
    }

    //Primeiramente vou tentar fazer um soft delet sem ser via api de emails ou coisa do tipo... 
    //posteriormente tentarei integrar um api de email ou ate mesmo o nodemailer
    //para poder o usuário reativar com o email...
    //mas aqui irei utilizar via ID por Params
    
    async reactive(request: Request, response: Response) {
        
        const { user_id } = request.params
        
        try {
            const trx = await knex.transaction()

            await trx('users')
                .update('deleted', false)
                .where('users._id', user_id)
                
            await trx.commit()

            return response.status(200).json({message: "User reactived!"})

        } catch (err) {

            return response.status(400).json(err)
        
        }
    }
}

export default new UserController()