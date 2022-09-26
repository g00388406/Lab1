
class Vehicle{

//initialising the data
constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//method to display the make, model and year of the vehicle
Information() {

    //using javascript to call information (using $)
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);

}

}

//example vehicle
console.log("Example 1: Vehicle");
let myVehicle = new Vehicle("Peugeot", "RCZ", 2011);
myVehicle.Information();

//space to separate each example
console.log(" ");



//making a child class (extends)
class Car extends Vehicle{

    constructor(make, model, year, doors){

        //using super to evoke parent constructor and adding new data
        super(make, model, year);
        this.doors = doors;

    }

        Information(){
            super.Information();
            console.log(`Doors: ${this.doors}`);
        }

    
}

//example car
console.log("Example 2: Car");
let myCar = new Car("VW", "Golf", 2022, 5);
myCar.Information();