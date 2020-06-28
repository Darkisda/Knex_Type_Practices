export default class User {
    
    private _id : Number
    private userName : String
    private userLast_name : String
    private userCompany : String
    private userEmail : String
    private userWhatsapp : String
    private userCity : String
    private userUF : String

    constructor(id: Number, username: String, userlast_name: String, usercompany: String, useremail: String, userwpp: String, usercity: String, useruf: String) {
        this._id = id
        this.userName = username
        this.userLast_name = userlast_name
        this.userCompany = usercompany
        this.userEmail = useremail
        this.userWhatsapp = userwpp
        this.userCity = usercity
        this.userUF = useruf
    }

    
    public getId() : Number {
        return this._id
    }

    public getUserName() : String {
        return this.userName
    }
    
    public getUserLast_name() : String {
        return this.userLast_name
    }

    public getUserCompany() : String {
        return this.userCompany
    }

    public getUserEmail() : String {
        return this.userEmail
    }

    public getUserWhatsapp() : String {
        return this.userWhatsapp
    }

    public getUserCity() : String {
        return this.userCity
    }

    public getUserUF() : String {
        return this.userUF
    }
    
    public setID(id : Number) {
        this._id = id;
    }
    
    public setUserName(username : String) {
        this.userName = username;
    }
    
    public setUserLast_Name(lastname : String) {
        this.userLast_name = lastname;
    }
    
    public setUserCompany(company : String) {
        this.userCompany = company;
    }
    
    public setUserEmail(email : String) {
        this.userEmail = email;
    }
    
    public setUserWhatsapp(wpp : String) {
        this.userWhatsapp = wpp;
    }
    
    public setUserCity(city : String) {
        this.userCity = city;
    }
    
    public setUserUF(uf : String) {
        this.userUF = uf;
    }
}