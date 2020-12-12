// let $no=document.getElementById('no')
// let $answer=document.getElementById('answer');
// $no.addEventListener('mouseenter',function() {
//     $answer.classList.toggle('revet');
// });


class person {
    name;
    age;

    sex;
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

}
class boy extends person {
    address;
    constructor(name, age, sex, address) {
        super(name, age, sex, address);
        this.address = address;
    }
    about() {
        console.log(`toi ten là ${this.name} ${this.age} tuoi ${this.sex} ${this.address}`)
    }

    static aboutboy() {
        console.log("day laf static khong caan goi laij ma nos duoc log ra luon")
    }
    get a(){
        return `day la hoc sinh ten la ${this.name}`
    }
    set ten(a){
        this.name=a;
    }
}


let duy = new boy("duy", 20, "nam", "hanoi")
console.log(duy.a)
duy.ten="duyen";
console.log(duy.a)