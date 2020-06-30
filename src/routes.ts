import {Router} from 'express'

import UsersController from './controllers/UsersController'
import ClientsController from './controllers/ClientsController'
import OrdersController from './controllers/OrdersController'
import ToDoController from './controllers/ToDoController'

const routes = Router()

routes.get('/', (request, response)=> {
    response.json({message: 'hello world'})
})

//User Routes
routes.get('/users', UsersController.index)

routes.post('/users', UsersController.create)

routes.put('/users/:user_id', UsersController.update)

routes.put('/users/deleteds/:user_id', UsersController.reactive)

routes.delete('/users/:user_id', UsersController.delete)

//Clients Routes
routes.get('/clients', ClientsController.index)

routes.get('/users/:user_id/clients', ClientsController.listByID)

routes.post('/users/:user_id', ClientsController.create)

routes.put('/users/:user_id/clients/:client_id', ClientsController.update)

routes.put('/users/:user_id/clients/deleteds/:client_id', ClientsController.reactive)

routes.delete('/users/:user_id/clients/:client_id', ClientsController.delete)

//Orders Routes
routes.get('/orders', OrdersController.index)

routes.get('/users/:user_id/clients/:client_id', OrdersController.list)

routes.get('/users/:user_id/clients/:client_id/deleteds', OrdersController.listDeleteds)

routes.post('/users/:user_id/clients/:client_id', OrdersController.create)

routes.put('/users/:user_id/clients/:client_id/orders/:order_id', OrdersController.update)

routes.put('/users/:user_id/clients/:client_id/orders/deleteds/:order_id', OrdersController.ressurge)

routes.delete('/users/:user_id/clients/:client_id/orders/:order_id', OrdersController.delete)



//To Do Orders routes

routes.get('/todo', ToDoController.index )

routes.get('/users/:user_id/clients/:client_id/orders/:order_id/todo', ToDoController.list)

routes.post('/users/:user_id/clients/:client_id/orders/:order_id', ToDoController.create)

routes.put('/users/:user_id/clients/:client_id/orders/:order_id/todo/:todo_id', ToDoController.update)

routes.delete('/users/:user_id/clients/:client_id/orders/:order_id/todo/:todo_id', ToDoController.delete)

export default routes