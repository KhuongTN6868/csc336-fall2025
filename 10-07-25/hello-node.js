const fs = require('fs'); //importing library using "commonJS" 


console.log("Hello Node!");

let randomNumbers = [];

//read "random-numbers.txt"

let fileContents = fs.readFileSync("./random-numbers.txt", "utf-8");
// console.log(fileContents[0]);
randomNumbers = JSON.parse(fileContents);
console.log(randomNumbers);

for (let i = 0; i < 10; i++) {
    let rand = Math.random();
    randomNumbers[i] = rand;
    // // console.log(randomNumbers[i]);
    // console.log(rand);
}


// let str = "";
// for (let rand of randomNumbers) {
//     str += rand + "\n";
// }

// fs.writeFileSync("random-numbers.txt", str);

fs.writeFileSync("random-numbers.txt", JSON.stringify(randomNumbers));



