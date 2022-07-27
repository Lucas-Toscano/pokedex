const pokemonName = document.querySelector('.pokemonName');
const bar = document.querySelector('.bar');
const pokemonNumber = document.querySelector('.pokemonNumber');
const pokemonFrontImage = document.querySelector('.pokemonFrontImage');

const form = document.querySelector('.form');
const input = document.querySelector('.inputSearch');
const backButton = document.querySelector('.backButton');
const nextButton = document.querySelector('.nextButton');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

  const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (apiResponse.status === 200) {
    const data = await apiResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  // screen
  pokemonNumber.innerHTML = '';
  bar.innerHTML = '';
  pokemonName.innerHTML = 'Carregando...';

  const data = await fetchPokemon(pokemon);

  if (data) {
    searchPokemon = data.id;
    pokemonFrontImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    bar.innerHTML = '-';
    pokemonNumber.innerHTML = data.id;
    pokemonFrontImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    // pokemonBackImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_default'];

    input.value = '';
  } else {
    pokemonFrontImage.style.display = 'none';
    pokemonName.innerHTML = 'Não encontrado';
    pokemonNumber.innerHTML = '';
    bar.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {

  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

backButton.addEventListener('click', () => {

  if (searchPokemon > 1) {
    searchPokemon--;
  renderPokemon(searchPokemon);
  }
});

nextButton.addEventListener('click', () => {

  searchPokemon++;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon.toString());