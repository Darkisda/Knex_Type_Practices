export default class {
    private _id : number
    private tasks : string
    private status : boolean = false
    private order_id : number

    constructor(id: number, tasks: string, order_id: number) {
        this._id = id
        this.tasks = tasks
        this.order_id = order_id
    }

    public getID() : number {
        return this._id
    }
    
    public getTasks() : string {
        return this.tasks
    }
    
    public getStatus() : boolean {
        return this.status
    }
    
    public getOrder_ID() : number {
        return this.order_id
    }
    
    public setTasks(task : string) {
        this.tasks = task;
    }
    
    public setStatus(status : boolean) {
        this.status = status;
    }
    
}