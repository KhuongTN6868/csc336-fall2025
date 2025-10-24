async function loadWorld() {
    const res = await fetch('/world');
    const world = await res.json();

    const worldDiv = document.getElementById('world');
    worldDiv.innerHTML = '';

    world.regions.forEach(region => {
        const regionDiv = document.createElement('div');
        regionDiv.innerHTML = `<h3>${region.name} (${region.climate})</h3>`;

        region.towns.forEach(town => {
            const townDiv = document.createElement('div');
            townDiv.innerHTML = `<p>${town.name} - population: ${town.population}</p>`;

            const peopleList = document.createElement('ul');
            town.notable_people.forEach(person => {
                const li = document.createElement('li');
                li.textContent = `${person.name} - ${person.role}`;
                peopleList.appendChild(li);
            });

            townDiv.appendChild(peopleList);
            regionDiv.appendChild(townDiv);
        });

        worldDiv.appendChild(regionDiv);
    });
}

document.getElementById('add-member-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch('/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const updatedWorld = await res.json();
    console.log('✅ Updated world:', updatedWorld);
    loadWorld(); 
});

loadWorld();
