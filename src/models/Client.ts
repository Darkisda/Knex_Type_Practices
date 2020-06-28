export default class Client {
    private _id :number
    private user_id : number
    private clientName : string
    private clientLastName : string
    private clientEmail : string
    private clientWhatsapp : string
    private clientCity : string
    private clientUF : string

    constructor(id: number, clientname: string, clientlast_name: string, clientemail: string, clientwpp: string, clientcity: string, clientuf: string, userid: number) {
        this._id = id
        this.clientName = clientname
        this.clientLastName = clientlast_name
        this.clientEmail = clientemail
        this.clientWhatsapp = clientwpp
        this.clientCity = clientcity
        this.clientUF = clientuf
        this.user_id = userid
    }

    
    public getID() : number {
        return this._id
    }
    
    public getClientName() : string {
        return this.clientName
    }
    
    public getClientLastName() : string {
        return this.clientLastName
    }
    
    public getClientEmail() : string {
        return this.clientEmail
    }
    
    public getClientWhatsapp() : string {
        return this.clientWhatsapp
    }
    
    public getClientCity() : string {
        return this.clientCity
    }
    
    public getClientUF() : string {
        return this.clientUF
    }
    
    public getClientUser_ID() : number {
        return this.user_id
    }
    
    public setClientName(name : string) {
        this.clientName = name;
    }
    
    public setClientLastName(lastname : string) {
        this.clientLastName = lastname;
    }
    
    public setClientEmail(email : string) {
        this.clientEmail = email;
    }
    
    public setClientWhatsapp(wpp : string) {
        this.clientWhatsapp = wpp;
    }
    
    public setClientCity(city : string) {
        this.clientCity = city;
    }
    
    public setClientUF(uf : string) {
        this.clientUF = uf;
    }
}