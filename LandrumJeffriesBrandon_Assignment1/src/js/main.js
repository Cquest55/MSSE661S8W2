
function displayHelloWorld(){
    document.getElementById("buttonToShow").style.visibility = "visible";
}

//document.getElementById("theClick").addEventListener("click", displayHelloWorld);

class Car{
    constructor(make, color, model) {
        this.make = make;
        this.color = color;
        this.model = model;
    }

    typeOfCar(){
        return `The car is a ${this.make}, while the model is a ${this.model}, and the color ${this.color}`;
    }

}

function displayTextInBox(){
    let test = new Car();
    test.color = "black";
    test.model = "pickUp";
    test.make = "ford";

    document.getElementById("model").innerHTML = `${test.model}`;
    document.getElementById("make").innerHTML = `${test.make}`;
    document.getElementById("color").innerHTML = `${test.color}`;
    document.getElementById("typeOfCar").innerHTML = `${test.typeOfCar()}`;
}


document.getElementById("showMe").addEventListener("click", displayTextInBox);




