export default class Client {
    private _id :Number
    private user_id : Number
    private clientName : String
    private clientLastName : String
    private clientEmail : String
    private clientWhatsapp : String
    private clientCity : String
    private clientUF : String

    constructor(id: Number, clientname: String, clientlast_name: String, clientemail: String, clientwpp: String, clientcity: String, clientuf: String, userid: Number) {
        this._id = id
        this.clientName = clientname
        this.clientLastName = clientlast_name
        this.clientEmail = clientemail
        this.clientWhatsapp = clientwpp
        this.clientCity = clientcity
        this.clientUF = clientuf
        this.user_id = userid
    }

    
    public getID() : Number {
        return this._id
    }
    
    public getClientName() : String {
        return this.clientName
    }
    
    public getClientLastName() : String {
        return this.clientLastName
    }
    
    public getClientEmail() : String {
        return this.clientEmail
    }
    
    public getClientWhatsapp() : String {
        return this.clientWhatsapp
    }
    
    public getClientCity() : String {
        return this.clientCity
    }
    
    public getClientUF() : String {
        return this.clientUF
    }
    
    public getClientUser_ID() : Number {
        return this.user_id
    }
    
    public setClientName(name : String) {
        this.clientName = name;
    }
    
    public setClientLastName(lastname : String) {
        this.clientLastName = lastname;
    }
    
    public setClientEmail(email : String) {
        this.clientEmail = email;
    }
    
    public setClientWhatsapp(wpp : String) {
        this.clientWhatsapp = wpp;
    }
    
    public setClientCity(city : String) {
        this.clientCity = city;
    }
    
    public setClientUF(uf : String) {
        this.clientUF = uf;
    }
}