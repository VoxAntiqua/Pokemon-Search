const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const imgDiv = document.getElementById("img-div");
const statBlock = document.getElementById("stat-block");
const basics = document.getElementById("basics");

async function fetchPokemon() {
    try {
        const pokemonNameOrId = searchInput.value.toLowerCase().split(" ").join("-");
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
        const data = await response.json();
        // Unhide elements
        statBlock.style.display = "block";
        // Assign all values 
        pokeName.textContent = data.name.toUpperCase();
        pokeId.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
        // Assign types
        types.innerHTML = data.types.map((obj) => `<span>${obj.type.name.toUpperCase()}</span>`)
        .join(" ");
        // Load image
        imgDiv.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" style="height: 25vh;"/>`
    } catch (error) {
        alert("Pokémon not found");
    }
}

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    clearPage();
    fetchPokemon();
});

function clearPage() {
    // Hide elements
    statBlock.style.display = "none";
    // Clear elements
    types.innerHTML = "";
    imgDiv.innerHTML = "";
    pokeId.textContent = "";
    pokeName.textContent = "";
    weight.textContent = "";
    height.textContent = "";
}