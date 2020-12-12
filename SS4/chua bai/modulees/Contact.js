export default class Contact{
    name;
    numberPhone;
    address;
    email;
    constructor(name,numberPhone,address,email){
        this.name=name;
        this.numberPhone=numberPhone;
        this.address=address;
        this.email=email;
    }
    showInfo(){
        console.log(`name:${this.name} numberphone ${this.numberPhone} address ${this.address} email ${this.email}  `)
    }
    set sName(name){
        this.name=name;
    }
    set sEmail(email){
        this.email=email;
    }
    set sNumberPhone(numberPhone){
        this.numberPhone=numberPhone;
    }
}