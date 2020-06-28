export default class Order {
    private _id : Number
    private description : String
    private client_id : Number

    constructor(id: Number, desc: String, clientid: Number) {
        this._id = id
        this.description = desc
        this.client_id = clientid
    }

    public getID() : Number {
        return this._id
    }
    
    public getDescription() : String {
        return this.description
    }
    
    public getClientID() : Number {
        return this.client_id
    }
    
    public setDescription(desc : String) {
        this.description = desc;
    }
    
}