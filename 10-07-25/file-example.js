const fs = require('fs'); //importing library using "commonJS"

let programCount = 0;



try {
    let fileContents = fs.readFileSync("program-count.txt", "utf-8");
    programCount = JSON.parse(fileContents);
}catch (error) {

    console.log("Error happened: file does not exist");

}

programCount++;
console.log(programCount);
fs.writeFileSync("program-count.txt", JSON.stringify(programCount)) ;



