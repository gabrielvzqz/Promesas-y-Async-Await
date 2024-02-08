const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function getRandomPokemon() {
  try {
    const randomPokemonId = Math.floor(Math.random() * 898) + 1;
    const response = await fetch(apiUrl + randomPokemonId);
    const data = await response.json();

    displayPokemonInfo(data);
  } catch (error) {
    console.error('Error al obtener el Pokémon:', error);
  }
}

function displayPokemonInfo(pokemon) {
  const pokemonImage = document.getElementById('pokemonImage');
  const pokemonName = document.getElementById('pokemonName');
  const pokemonAbilities = document.getElementById('pokemonAbilities');

  pokemonImage.src = pokemon.sprites.front_default;
  pokemonName.textContent = pokemon.name;

  while (pokemonAbilities.firstChild) {
    pokemonAbilities.removeChild(pokemonAbilities.firstChild);
  }

  pokemon.abilities.forEach((ability) => {
    const listItem = document.createElement('li');
    listItem.textContent = ability.ability.name;
    pokemonAbilities.appendChild(listItem);
  });
}

function clearPokemonInfo() {
  const pokemonImage = document.getElementById('pokemonImage');
  const pokemonName = document.getElementById('pokemonName');
  const pokemonAbilities = document.getElementById('pokemonAbilities');

  pokemonImage.src = '';
  pokemonName.textContent = '';
  pokemonAbilities.innerHTML = '';
}