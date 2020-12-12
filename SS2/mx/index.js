//class: bản thiết kế để tạo 1 đối tượng
//class Person{
//     name;
//     age;
//     address;
//     sex;
//     isMarriage;
//     // được gọi khi gọi new Person
//     constructor(name,age,sex){
//         this.name=name;
//         this.age=age;
//         this.sex=sex;
//         console.log(this)
//     }

// run(){
//     console.log(`i am running`)
// }
// walk(){
//     console.log("i am walking")
// }
// goTo(destination){
//     console.log(`i am going to ${destination}`)
// }
// calculateSum(a,b){
//     console.log(`${a}+${b}=${a+b}`)
// }
// sleep=function(){}
// laugh = () =>{

// }
// introduce(){
//     console.log(`
//     xin chao moij nguoi,
//     minh la ${this.name}`)
// }
// speak(){console.log(`
//     ${this.name}  biet noi` 
// )}
// }

// //object:được tạo từ class
// let long=new Person("long",20,"nam");
// long.goTo(`quat lam`);
// long.speak();
// let duy=new Person("duy",20,"nam")
// duy.introduce();
// let bình=new Person("binh",20,"nam")
// class Animal{
//     name;
//     gender;
//     color;
//     legs;
//     constructor(name,gender,color,legs){
//         this.name=name;
//         this.gender=gender;
//         this.color=color;
//         this.legs=legs;
//         console.log(this)
//     }
// }
// let cho= new Animal("cho","duc","trang","dvcv")
// let meo= new Animal("lon","duc","trang","dvcv")
// let ga=new Animal("ga","duc","trang","dvcv")
//
//

// class Person {
//     name;
//     sex;
//     age;
//     slogan;

//     constructor(name, sex, age, slogan) {
//         this.name = name;
//         this.sex = sex;
//         this.age = age;
//         this.slogan = slogan;
//     }
// }
// class GoodBoy extends Person {
//     poor;

//     constructor(name, sex, age, slogan, poor) {
//         super(name, sex, age, slogan);
//         this.poor = poor;
//     }
// }
// let long = new GoodBoy("Long", "male", 20, "em an com chua","rot mong toi");
// console.log(long)
// //
// class BigcityBoy extends Person{
//     rich;
//     constructor(name,sex,age,slogan,poor){
//         super(name,sex,age,slogan);
//         this.rich=rich;
//     }
// }
// let long=new BigcityBoy ("long","male",22,"di choi ko","rot mong toi");
// console.log(long)
//
//
class Person {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    speak() {
        console.log("hello")

    }
}
class Boy extends Person() {
    sex;
    constructor(name, age, address, sex) {
        super(name, age, address);
        this.sex = sex;
    }

    hit() {
        console.log("ngoan")
    }
}
class Girl extends Person() {
    sex;
    constructor(name, age, address, sex) {
        super(name, age, address, sex)
        this.sex = sex;
    }

    cook() {
        console.log("ngoan")
    }
}

class GoodGirl extends Girl() {
    poor;
    constructor(name, age, address, sex) {
        super(name, age, address, sex);
        this.sex = sex;
    }

    cook() {
        console.log("ngoan")
    }
}




class GoodBoy extends Boy() {
    rich;
    constructor(name, age, address, sex) {
        super(name, age, address, sex);
        this.sex = sex;
    }

    cook() {
        console.log("ngoan")
    }
}
let a=new GoodBoy("a",2,"ha noi","nam")
console.log(a)