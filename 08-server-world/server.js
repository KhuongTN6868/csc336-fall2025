import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// GET route — send the full world data
app.get('/world', (req, res) => {
    try {
        const data = fs.readFileSync('./world.json', 'utf-8');
        const world = JSON.parse(data);
        res.json(world);
    } catch (err) {
        console.error("❌ Error reading world.json:", err);
        res.status(500).send("Internal Server Error");
    }
});

// POST route — add new person and increase population
app.post('/update', (req, res) => {
    try {
        const data = fs.readFileSync('./world.json', 'utf-8');
        const world = JSON.parse(data);

        const newPerson = req.body;  // e.g., { name: 'Alice', role: 'Healer', region: 'Dragon World' }
        console.log("🆕 Adding person:", newPerson);

        // Find the region by name
        const region = world.regions.find(r => r.name === newPerson.region);
        if (region) {
            // Add person to the first town in that region
            const town = region.towns[0];
            town.notable_people.push({
                name: newPerson.name,
                role: newPerson.role,
                items: []
            });

            // Increase population count by 1
            town.population += 1;

            console.log(` Added ${newPerson.name} to ${region.name}. New population: ${town.population}`);
        } else {
            console.warn(`Region not found: ${newPerson.region}`);
        }

        // Save changes
        fs.writeFileSync('./world.json', JSON.stringify(world, null, 2));
        res.json(world);
    } catch (err) {
        console.error("❌ Error updating world.json:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(` Server running at: http://localhost:${PORT}`);
});
