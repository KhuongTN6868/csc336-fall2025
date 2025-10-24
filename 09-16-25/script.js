let person = {
    name: "John",
    age: 30,
    city: "New York",
    favoriteisCat: true,
    hello: function(n) {
        for (let i = 0; i < n; i++) {
            console.log("Hello");
        }
    },
    favoritePe: {
        name: "Max",
        spieces: "cat"
    }


}

person.hello(10);
console.log(person.favoritePe.name);
person.favoritePe.name = "Mew mew";
console.log(person.favoritePe.name);

console.log(document); // document object



function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let diceRollDiv = document.querySelector("#dice-roll");
    // diceRollDiv.innerHTML += "<div class='dice-roll'>" + randomNumber + "</div>";
    
    let newRollDiv = document.createElement("div");
    newRollDiv.textContent = randomNumber;
    newRollDiv.className = "dice-roll";
    diceRollDiv.append(newRollDiv);

}
































