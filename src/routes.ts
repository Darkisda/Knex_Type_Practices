import {Router} from 'express'

import UsersController from './controllers/UsersController'
import ClientsController from './controllers/ClientsController'

const routes = Router()

routes.get('/', (request, response)=> {
    response.json({message: 'hello world'})
})

//User Routes
routes.get('/users', UsersController.index)

routes.post('/users', UsersController.create)

routes.put('/users/:user_id', UsersController.update)

routes.delete('/users/:user_id', UsersController.delete)

//Clients Routes
routes.get('/clients', ClientsController.index)
routes.get('/users/:user_id/clients', ClientsController.listByID)

routes.post('/users/:user_id', ClientsController.create)

export default routes