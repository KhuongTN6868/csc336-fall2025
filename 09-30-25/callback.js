let button = document.querySelector("#callbackDemoButton");


// // function clickEventHappened() {
// //     console.log("Click event happened!");
// // }
// // button.addEventListener("click", clickEventHappened);

// button.addEventListener("click", e => console.log("Clicked!"));


// function doSomething(numTimes) {
//     let sum = 0; // Declare the sum variable
//     for (let i = 0; i < numTimes; i++) {
//         sum += i * numTimes / 4;
//     }
//     return sum;
// }

// let result = doSomething(100);
// console.log(result);


let dogRequest = fetch("https://dog.ceo/api/breeds/image/random");

let beforeRequest = Date.now();


console.log(dogRequest);




// dogRequest
//     .then((dogResponse) => {return dogResponse.json()})
//     .then((dogData) => {
//     let timePassed = Date.now() - beforeRequest;
//     console.log(`It took ${timePassed} for the request.`);
//     // console.log(dogData);
//     let dogImage = document.createElement("img");
//     dogImage.src = dogData.message;
//     document.querySelector("body").appendChild(dogImage);
// })
// .catch ( () => console.log("something went wrong"));




// console.log("Will this appear before the dog data?");

async function getAndDisplayDogImage() {
    
    let dogRequest =  await fetch("https://dog.ceo/api/breeds/image/random");
    let dogData = await dogRequest.json();
    let timePassed = Date.now() - beforeRequest;
    console.log(`It took ${timePassed} for the request.`);
    console.log(dogData);
    let dogImage = document.createElement("img");
    dogImage.src = dogData.message;
    document.querySelector("body").appendChild(dogImage);
}

for (let i = 0; i < 10; i++) {
getAndDisplayDogImage();

}

