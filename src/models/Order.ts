export default class Order {
    private _id : number
    private description : string
    private client_id : number

    constructor(id: number, desc: string, clientid: number) {
        this._id = id
        this.description = desc
        this.client_id = clientid
    }

    public getID() : number {
        return this._id
    }
    
    public getDescription() : string {
        return this.description
    }
    
    public getClientID() : number {
        return this.client_id
    }
    
    public setDescription(desc : string) {
        this.description = desc;
    }
    
}