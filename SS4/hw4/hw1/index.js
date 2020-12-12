export default class danhba {
    ten;
    sdt;
    cqlv;
    constructor(ten,sdt,cqlv){
        this.ten=ten;
        this.sdt=sdt;this.cqlv=cqlv;
    } 
    get (){
       ` day la ${this.ten} sdt la ${this.sdt} cqlv la ${this.cqlv}`
    }
    set(data){
        this.ten=data.ten;
        this.sdt=data.sdt;
        this.cqlv=data.cqlv
    }
}
