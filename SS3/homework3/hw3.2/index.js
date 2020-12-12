class Document {
    id;
    name;
    author;
    price;
    publishDate;
    constructor(id, name, author, price, publishDate) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;
    }
    // get info(): return thông tin về tài liệu đó
    get info() {
        return ` dia chi tai lieu la ${this.id} ten la ${this.name} tac gia la ${this.author}  gia la ${this.price}  ngay xuat ban la ${this.publishDate}`
    }
    // set info(data): sửa thông tin của document với data (data là 1 object)
    set info(a) {
        this.author = a;

    }
}
let oop = new Document(1, "oop", "ducduy", 10, "26/6/2028")
console.log(oop.info)
oop.author = ["duc duy", "bui duc duy"]
console.log(oop.info)

class EBook extends Document {
    discount;
    constructor(id, name, author, price, publishDate, discount) {
        super(id, name, author, price, publishDate)
        this.discount = discount;
    }
//get info():return thong tin cua sach dien tu sau khi discount
    get info() {
        return `cuon sach nay co id la ${this.id} ten la ${this.name} tac gia la ${this.author} ngay san xuat la ${this.publishDate} co gia la ${this.price} muc giam gia la  ${this.discount} gia sau khi ap dung discount la ${this.price - this.price * this.discount}`
    }
}
let toanroirac = new EBook(1, "toan roi rac", "nguyen van hung", 10000, "20/2/2020", 0.3)
//get info()
console.log(toanroirac.info)

class HardCopy extends Document{
    source;
    constructor(id, name, author, price, publishDate,source){
        super(id, name, author, price, publishDate)
        this.source=source;
    }
    get info(){
        return`id ${this.id} ten sach ${this.name}  gia${this.price}  tac gia ${this.author}  ngay xuat ban${this.publishDate} nguon ${this.source}`
    }
}
let tailieu=new HardCopy(1,"tai lieu","bui duc duy",11000,"22/8/2020","thu vien dai hoc xay dung")
console.log(tailieu.info)

class DocumentCase{
    id;
    name;
    document=[];
    owner;
    dateModified;
    constructor(id,name,document,owner,dateModified){
        this.id=id;
        this.name=name;
        this.document.push(document);
        this.owner=owner;
        this.dateModified=dateModified;
    }    
}
let dcm1=new Document(1,"quyển sách 1","duy",10000,"02/02/2020")
let dcm2=new Document(2,"quyển sách 2","duc duy",20000,"03/03/2020")