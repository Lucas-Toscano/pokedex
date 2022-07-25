const pokemonName = document.querySelector('.pokemonName');
const pokemonNumber = document.querySelector('.pokemonNumber');
const pokemonFrontImage = document.querySelector('.pokemonFrontImage');
// const pokemonBackImage = document.querySelector('.pokemonBackImage');

const fetchPokemon = async (pokemon) => {
  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
  const data = await apiResponse.json();

  return data;
}

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonFrontImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
  // pokemonBackImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_default'];
}

renderPokemon('8');