let animals = [

    {
        type: "cat",
        strength: 10,
        charisma: 16,

    },

    {
        type: "dog",
        strength: 14,
        charisma: 9,
        

    },
    {
        type: "rabbit",
        strength: 7,
        charisma: 12,
    },

    {
        type: "sea hourse",
        strength: 18,
        charisma: 20,
    }
];


document.addEventListener("DOMContentLoaded", populateAnimalsInfoDiv)

function populateAnimalsInfoDiv() {
    let animalsInfoDiv = document.querySelector("#all-animals-info");
    animalsInfoDiv.innerHTML = "";
    for (let animal of animals) {
        let animalLi = createAnimalLi(animal);
        animalsInfoDiv.appendChild(animalLi);
    }
}

function createAnimalLi(animal) {
    let li = document.createElement("li");
    li.className = "animal-item";
    li.innerHTML = `<strong>${animal.type}</strong> <span class="stats">(Strength: ${animal.strength}, Charisma: ${animal.charisma})</span>`;
    return li;
}






let addAnimalForm = document.querySelector("#add-animal-form");
addAnimalForm.addEventListener("submit", addNewAnimal);

function addNewAnimal(event) {
    event.preventDefault();
    let strengthInput = parseInt(document.querySelector("#animal-strength").value, 10);
    let charismaInput = parseInt(document.querySelector("#animal-charisma").value, 10);
    let typeInput = document.querySelector("#animal-type").value;
    let newAnimal = {
        type: typeInput,
        strength: strengthInput,
        charisma: charismaInput,
    }
    animals.push(newAnimal);
    populateAnimalsInfoDiv();
    document.querySelector("#add-animal-form").reset();
    document.querySelector("#animal-type").focus();
}



