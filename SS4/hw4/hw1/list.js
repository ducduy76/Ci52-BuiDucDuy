import danhba from "./index.js"
export class list extends danhba {
    ten;
    lists;
    constructor(ten, lists) {
        this.ten = ten;
        this.lists = [];
    }
    adddanhba(list) {
        if (list instanceof danhba) {
            this.lists.push(list)
        } else { console.log("truyeenf linh tinh roi") }
    }
    //find cacsh 1
    finddanhba(ten) {
        let result = [];
        for(let thongtin of this.lists ){
            if(thongtin.ten==ten){
                result.push(thongtin)
            }
        }
        return result
        //find cach 2
    // let result=this.lists.filter(function(thongtin){
    //     return thongtin.ten==ten;
    // });
    // return result;
    }
    showlists(){
        this.lists.forEach(function(list){
            console.log(list.info)
        })
    }
    deletedanhba(sdt){
        let sodienthoai=-1;
        for(let i=0;i<this.lists.length;i++){
            if(this.list[i].sdt==sdt){sodienthoai=i}
        }if(sodienthoai>=0){
            this.lists.splice(sodienthoai,1)
        }
 
    }
    updateDanhba(sdt,data){
        let found=this.lists.find(function(list){
            return list.sdt==sdt;
        });
        if(found !=null){
            found.info=data
        }
    }
}