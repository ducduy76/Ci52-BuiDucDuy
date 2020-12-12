// class Vehicle {
//     name;
//     speed;
//     brand;
//     constructor(name, speed, brand) {
//         this.name = name;
//         this.speed = speed;
//         this.brand = brand;
//     }
//     about() {
//         console.log(`phuong tien ${this.name}chay voi toc do la ${this.speed}`);

//     }
// }
import { Vehicle } from "./Vehicle.js"

class Car extends Vehicle {
               
    static whells = 4;
    about() {
        //super.about();// ham ghi dde
        console.log(`xe hoi ${this.name} chayj voi toc do ${this.speed}`)
    }

    static aboutCar() {
        console.log("day la xe hoiw nhes")
    }
    // getter
    get info() {
        return `day la xe hoi ten cua nó là${this.name}
    tốc độ ${this.speed}
    hãng ${this.brand}`
    }
    // setter
    set tocdo(a) {
        if (isNaN(a)) {
            console.log("nhap vao mot so")
        } else {
            this.speed = a
        }
    }

    set ten(a) {
        this.name = a;
    }


    set tenxe(a) {
        this.name = a
    }
}
class Bike extends Vehicle {

    
}
class Plane extends Vehicle {

}
let mercedes = new Car("mercedes", 200, "Mer")
mercedes.about()
console.log(Car.whells)
Car.aboutCar()
Car.whells
//getter
let lexus2020 = new Car("lexus", 120, "toyota")
console.log(lexus2020.info)
//setter

lexus2020.tocdo = 300
lexus2020.tocdo = 900;
console.log(lexus2020.info)
lexus2020.ten = "dangcaap"
console.log(lexus2020.info)

lexus2020.tenxe = "xe sang trong"
console.log(lexus2020.info)
import { hellovietnam } from "./hello.js"
hellovietnam();
 
// let xe1 = new Vehicles("Lexus", 200, "Toyota");
// xe1.about();