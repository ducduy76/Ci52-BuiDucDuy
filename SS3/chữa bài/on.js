// import Document from "./Document.js"
// export default class DocumentCase{
//     name;
//     documents=[];
//     owner;
//     dateModified;
//     constructor(id,name,document,owner,date){
//         this.id=id;
//         this.name=name;
//         this.documents.push(document);
//         this.owner=owner;
//         this.date=new Date().toISOString;
//     }

//     addDocument(document){
//         if(document instanceof Document){
//             this.documents.push(document)
//         }else{console.log("truyeefn linh tinh")}
//     }
// }


//cach 1 find
// findDocument(name) {
    
    //let result=[];
    // for(let document of this.documents){
    //     if(document.name==name){
    //         result.push(document)
    //     }
    // }return result
    // cacsh find 2
//     let result=this.documents.filter(function(document){
//         return document.name==name
//     })
// return result
// }

// showDocuments(){
//     this.documents.forEach(function(document){
//         console.log(document.info)
//     })
// }
findDocument(name){
    let result=this.documents.filter(function(document){
        return document.name==name;
    })
    return result;
}
showDocuments(){
    this.documents.forEach(function(document){
        console.log(document.info)
    })
}
deleteDocument(id){
    let a=-1;
    for(let i=0;i<this.documents.length;i++){
        if(this.document[i].id==id){
            a=i
        }
let found=this.documents.findIndex(function(document){
    return document.id==id
})
updateDocument(
    let found=this.documents.find(function(document){
        return document.id=id;
    })if(found!=null){
        found.info=data
    }
)