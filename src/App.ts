import express from 'express'

import routes from './routes'

class App {
    
    public expressAp: express.Application 

    constructor (){
        this.expressAp = express()
        
        this.midlewares()
        this.routes()
    }

    private midlewares() {
        this.expressAp.use(express.json())
    }

    private routes() {
        this.expressAp.use(routes)
    }
}

export default new App().expressAp