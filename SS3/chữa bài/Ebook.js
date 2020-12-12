import {Document} from "./Document.js";
export default class Ebook extends Document{
    discount;
    constructor(name,author,price,publishDate,discount){
        super(name,author,price,publishDate);
        this.discount=discount;
    }
    get info(){
        return` name ${this.name} author${this.author}publishDate  ${this.publishDate} discount ${this.discount}  price ${this.price*this.dicount}`
    }
}