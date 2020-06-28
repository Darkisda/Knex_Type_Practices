export default class User {
    
    private userName : string
    private userLast_name : string
    private userCompany : string
    private userEmail : string
    private userWhatsapp : string
    private userCity : string
    private userUF : string

    constructor(username: string, userlast_name: string, usercompany: string, useremail: string, userwpp: string, usercity: string, useruf: string) {
        this.userName = username
        this.userLast_name = userlast_name
        this.userCompany = usercompany
        this.userEmail = useremail
        this.userWhatsapp = userwpp
        this.userCity = usercity
        this.userUF = useruf
    }

    public getUserName() : string {
        return this.userName
    }
    
    public getUserLast_name() : string {
        return this.userLast_name
    }

    public getUserCompany() : string {
        return this.userCompany
    }

    public getUserEmail() : string {
        return this.userEmail
    }

    public getUserWhatsapp() : string {
        return this.userWhatsapp
    }

    public getUserCity() : string {
        return this.userCity
    }

    public getUserUF() : string {
        return this.userUF
    }

    public setUserName(username : string) {
        this.userName = username;
    }
    
    public setUserLast_Name(lastname : string) {
        this.userLast_name = lastname;
    }
    
    public setUserCompany(company : string) {
        this.userCompany = company;
    }
    
    public setUserEmail(email : string) {
        this.userEmail = email;
    }
    
    public setUserWhatsapp(wpp : string) {
        this.userWhatsapp = wpp;
    }
    
    public setUserCity(city : string) {
        this.userCity = city;
    }
    
    public setUserUF(uf : string) {
        this.userUF = uf;
    }
}