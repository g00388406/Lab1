
//bmi class, with a constructor that assigns values to height and weight 
class BMI {

    //initialising the data
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }


    //method to multiply the bmi
    calculateBMI() {

        let bmi = this.weight / (this.height ** 2);
        return bmi;

    }
}

//example digits for a bmi calculation
let myBMI = new BMI(2, 100);
let result = myBMI.calculateBMI();

//printing the results
console.log("My BMI is " + result);
