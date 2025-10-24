class Person {
    constructor(n){
        this.name = n;
    }
    sayhello(howManyTimes){
        for (let i = 0; i < howManyTimes; i++){
        console.log("Hello, my name is " + this.name);

    }
}

}



// Instantiating an object from a class
let Mike = new Person("Mike");
Mike.sayhello(100);


console.log(localStorage.getItem("user or whatever"));

localStorage.setItem("user or whatever", "Mike" + Math.random());


let stringVersionOfMike = JSON.stringify(Mike); // turn object into string
console.log(stringVersionOfMike);

let mikeObject = JSON.parse(stringVersionOfMike); // turn string back into object
console.log(mikeObject);

  





// function buttonClicked(e){
//     console.log("Button was clicked!");
//     console.log(e);

// }


let myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", buttonClicked);


let canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

myButton.addEventListener("click", (e) => {
    console.log("Button was clicked!");
    console.log(e);

    

    ctx.fillStyle = "lightblue";
    let x = Math.random() * 600;
    let y = Math.random() * 400;
    ctx.fillRect(x,y,100,75)  ;

});



function animationFunction() {
    ctx.fillRect(0,0,100,75)  ;
    ctx.fillStyle = "white";



    ctx.fillStyle = "red";

    let x = Math.random() * 600;
    let y = Math.random() * 400;
    ctx.fillRect(x,y,100,75)  ;
}


setInterval(animationFunction, 500);




















