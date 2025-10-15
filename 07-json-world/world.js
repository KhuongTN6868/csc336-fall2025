import fs from 'fs';

const data = fs.readFileSync('world.json', 'utf-8');
const world = JSON.parse(data);

console.log("Here are the regions:");
world.regions.forEach(e => {
    console.log(`${e.name} and the climate is ${e.climate}`);
});


console.log("\n Notable People:");
world.regions.forEach(region => {
  region.towns.forEach(town => {
    town.notable_people.forEach(person => {
      console.log(`- ${person.name} the ${person.role} from ${town.name}`);
    });
  });
});

console.log("\n Rare Items:");
world.regions.forEach(region => {
  region.towns.forEach(town => {
    town.notable_people.forEach(person => {
      person.items.forEach(item => {
        if (typeof item === 'object' && item.rarity === 'Rare') {
          console.log(`- ${item.name} (owned by ${person.name})`);
        }
      });
    });
  });
});