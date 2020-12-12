export class Vehicle{
    name;
    speed;
    brand;
    constructor(name,speed,brand){
        this.name=name;
        this.speed=speed;
        this.brand=brand;
    }
    about(){
        console.log(`phuong tien ${this.name}chay voi toc do la ${this.speed}`);
    }
}