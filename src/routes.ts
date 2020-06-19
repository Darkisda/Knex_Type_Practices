import {Router} from 'express'

import UsersController from './controllers/UsersController'
import ClientsController from './controllers/ClientsController'
import OrdersController from './controllers/OrdersController'

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

routes.put('/users/:user_id/clients/:client_id', ClientsController.update)

routes.delete('/users/:user_id/clients/:client_id', ClientsController.delete)

//Orders Routes
routes.get('/orders', OrdersController.index)

routes.post('/users/:user_id/clients/:client_id', OrdersController.create)

routes.put('/users/:user_id/clients/:client_id/orders/:order_id', OrdersController.update)

routes.delete('/users/:user_id/clients/:client_id/orders/:order_id', OrdersController.delete)

export default routes