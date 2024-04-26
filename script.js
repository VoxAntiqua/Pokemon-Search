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

async function fetchPokemon() {
    try {
        const pokemonNameOrId = searchInput.value.toLowerCase().split(" ").join("-");
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
        const data = await response.json();
        imgDiv.textContent = data;
    } catch (error) {
        alert("Pokémon not found");
    }
}

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    fetchPokemon();
});