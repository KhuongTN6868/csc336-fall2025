let arr = [true, false, "cat"];
console.log(arr);
arr.push("dog");
console.log(arr);

arr.pop();
console.log(arr);


let spliceed = arr.splice(1, 1);
console.log(spliceed);

arr.forEach(val => {
    console.log(val);
});

for ( let val of arr) {
    console.log(val);
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


let i= 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}








let arr2 = [1,2,3,4,5,6,7,2];
let lessThan3 = arr2.filter(el =>{
    if (el <3){
        return true;
    } else {
        return false;
    }
});

//or let lessThan3 = arr2.filter(el => el < 3);

console.log(lessThan3);

let addTen = arr.map(el => el +10);
//or
// function addTenToArray(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] + 10);
//     }
//     return newArr;
// }

console.log(addTen);




let randNumbers = [];
for (let i = 0; i<100; i++){
    randNumbers.push(Math.random());
}
console.log(randNumbers);

randNumbers.sort((a,b) => a - b);
console.log(randNumbers);





