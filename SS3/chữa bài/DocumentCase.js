import{ Document} from "./Document.js";
export default class DocumentCase extends Document {

    name;
    documents =[];
    owner;
    dateModified;
    constructor(id, name, document, owner, Date) {
        this.id = id;
        this.name = name;
        this.documents.push(document);//ko kieem soát dữ liệu đầu vào
        this.owner = owner;
        this.dateModified = new Date().toISOString;
    }
    addDocument(document) {
        if (document instanceof Document) {
            this.documents.push(document);
        } else {
            console.log("truyeefn linh tinh")
        }
    }

    //cach 1 find
    findDocument(name) {
        let result = [];
        for (let document of this.documents) {
            if (document.name == name) {
                result.push(document);
            }
        }
        return result;
        // cach 2 find
        // filter() nó là tạo ra 1 cái mảng chứa các phần tử vượt qua 1 bài kiểm tra(dưới dạng 1 hàm :như ở dưới là hàm function)
        let result = this.documents.filter(function (document) {
            return document.name == name;
        });
        return result;
    }
    showDocuments() {
        this.documents.forEach(function (document) {
            //forEach nó gần giống với "map" cùng xét từng phần tử trong mảng,nhưng forEach là nó xét cái hàm function cho từng phần tử 
            // ví dụ như dới đây là nó dùng hàm inra document.info áp dụng cho từng document trong documents:oke
            console.log(document.info)
        })
    }
    deleteDocument(id) {
        // let foundIndex=-1;
        // for(let i=0;i<this.documents.length;i++){
        //     if(this.document[i].id==id){
        //         foundIndex=i
        //     }
        // }
        let foundIndex = this.documents.findIndex(function (document) {
            return document.id == id
        })
        if (foundIndex >= 0) {
            this.documents.splice(foundIndex, 1)
        }
    }

    updateDocument(id, data) {
        let found = this.documents.find(function (document) {
            return document.id == id;
        });
        if (found != null) {
            found.info = data;
        }
    }
}