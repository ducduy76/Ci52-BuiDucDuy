import {Document} from  "./Document.js"

    export default class Hardcopy extends Document{
        source;
        constructor(name,author,price,publishDate,source){
            super(name,author,price,publishDate);
            this.source=source;
        }
        get info(){
            return` name ${this.name} author${this.author}publishDate  ${this.publishDate} discount ${this.discount}  price ${this.source}`
        }

    }