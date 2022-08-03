const pokemonName = document.querySelector('.pokemonName');
const pokemonNumber = document.querySelector('.pokemonNumber');
const pokemonFrontImage = document.querySelector('.pokemonFrontImage');

const pokemonHp = document.querySelector('.pokemonHp');
const pokemonAtk = document.querySelector('.pokemonAtk')
const pokemonDef = document.querySelector('.pokemonDef')
const pokemonSpAtk = document.querySelector('.pokemonSpAtk');
const pokemonSpDef = document.querySelector('.pokemonSpDef');
const pokemonSpd = document.querySelector('.pokemonSpd');
const pokemonWeight = document.querySelector('.pokemonWeight');

const pokemonType = document.querySelector('.pokemonType');
const pokemonType2 = document.querySelector('.pokemonType2');
const TypeBackground = document.getElementById('type');
const TypeBackground2 = document.getElementById('type2');

const ability1 = document.querySelector('.skill1');
const ability2 = document.querySelector('.skill2');

const move1 = document.querySelector('.move1');
const move2 = document.querySelector('.move2');
const move3 = document.querySelector('.move3');
const move4 = document.querySelector('.move4');

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
  pokemonName.innerHTML = 'Carregando...';

  const data = await fetchPokemon(pokemon);

  if (data) {
    searchPokemon = data.id;
    pokemonFrontImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonFrontImage.src = data['sprites']['other']['official-artwork']['front_default'];

    pokemonHp.innerHTML = data['stats']['0']['base_stat'];
    pokemonAtk.innerHTML = data['stats']['1']['base_stat'];
    pokemonDef.innerHTML = data['stats']['2']['base_stat'];
    pokemonSpAtk.innerHTML = data['stats']['3']['base_stat'];
    pokemonSpDef.innerHTML = data['stats']['4']['base_stat'];
    pokemonSpd.innerHTML = data['stats']['5']['base_stat'];
    pokemonType.innerHTML = data['types']['0']['type']['name'];
    pokemonWeight.innerHTML = `${data.weight /10}Kg`;

    ability1.innerHTML = data['abilities']['0']['ability']['name'];
    ability2.innerHTML = data['abilities']['1']['ability']['name'];

    move1.innerHTML = data['moves']['0']['move']['name'];
    move2.innerHTML = data['moves']['1']['move']['name'];
    move3.innerHTML = data['moves']['2']['move']['name'];
    move4.innerHTML = data['moves']['3']['move']['name'];

    if (pokemonType.innerHTML === 'grass') {
      pokemonType.innerHTML = 'Grama';
      // TypeBackground.classList.add('bg-green-300');
    } else if (pokemonType.innerHTML === 'fire') {
      pokemonType.innerHTML = 'Fogo';
      // TypeBackground.classList.add('bg-red-300');
      // TypeBackground.classList.remove('bg-green-300');
    } else if (pokemonType.innerHTML === 'bug') {
      pokemonType.innerHTML = 'Inseto';
    } else if (pokemonType.innerHTML === 'normal') {
      pokemonType.innerHTML = 'Normal';
    } else if (pokemonType.innerHTML === 'dark') {
      pokemonType.innerHTML = 'Sombrio';
    } else if (pokemonType.innerHTML === 'flying') {
      pokemonType.innerHTML = 'Voador';
    } else if (pokemonType.innerHTML === 'poison') {
      pokemonType.innerHTML = 'Veneno';
    } else if (pokemonType.innerHTML === 'dragon') {
      pokemonType.innerHTML = 'Dragão';
    } else if (pokemonType.innerHTML === 'ghost') {
      pokemonType.innerHTML = 'Fantasma';
    } else if (pokemonType.innerHTML === 'psychic') {
      pokemonType.innerHTML = 'Psíquico';
    } else if (pokemonType.innerHTML === 'electric') {
      pokemonType.innerHTML = 'Elétrico';
    } else if (pokemonType.innerHTML === 'rock') {
      pokemonType.innerHTML = 'Pedra';
    } else if (pokemonType.innerHTML === 'fairy') {
      pokemonType.innerHTML = 'Fada';
    } else if (pokemonType.innerHTML === 'ground') {
      pokemonType.innerHTML = 'Terra';
    } else if (pokemonType.innerHTML === 'steel') {
      pokemonType.innerHTML = 'Metal';
    } else if (pokemonType.innerHTML === 'fighting') {
      pokemonType.innerHTML = 'Lutador';
    } else if (pokemonType.innerHTML === 'ice') {
      pokemonType.innerHTML = 'Gelo';
    } else if (pokemonType.innerHTML === 'water') {
      pokemonType.innerHTML = 'Água';
    } else { }

    if (data['types']['1']['type']['name']) {
      pokemonType2.innerHTML = data['types']['1']['type']['name'];

      if (pokemonType2.innerHTML === 'grass') {
        pokemonType2.innerHTML = 'Grama';
      } else if (pokemonType2.innerHTML === 'fire') {
        pokemonType2.innerHTML = 'Fogo';
      } else if (pokemonType2.innerHTML === 'bug') {
        pokemonType2.innerHTML = 'Inseto';
      } else if (pokemonType2.innerHTML === 'normal') {
        pokemonType2.innerHTML = 'Normal';
      } else if (pokemonType2.innerHTML === 'dark') {
        pokemonType2.innerHTML = 'Sombrio';
      } else if (pokemonType2.innerHTML === 'flying') {
        pokemonType2.innerHTML = 'Voador';
      } else if (pokemonType2.innerHTML === 'poison') {
        pokemonType2.innerHTML = 'Veneno';
      } else if (pokemonType2.innerHTML === 'dragon') {
        pokemonType2.innerHTML = 'Dragão';
      } else if (pokemonType2.innerHTML === 'ghost') {
        pokemonType2.innerHTML = 'Fantasma';
      } else if (pokemonType2.innerHTML === 'psychic') {
        pokemonType2.innerHTML = 'Psíquico';
      } else if (pokemonType2.innerHTML === 'electric') {
        pokemonType2.innerHTML = 'Elétrico';
      } else if (pokemonType2.innerHTML === 'rock') {
        pokemonType2.innerHTML = 'Pedra';
      } else if (pokemonType2.innerHTML === 'fairy') {
        pokemonType2.innerHTML = 'Fada';
      } else if (pokemonType2.innerHTML === 'ground') {
        pokemonType2.innerHTML = 'Terra';
      } else if (pokemonType2.innerHTML === 'steel') {
        pokemonType2.innerHTML = 'Metal';
      } else if (pokemonType2.innerHTML === 'fighting') {
        pokemonType2.innerHTML = 'Lutador';
      } else if (pokemonType2.innerHTML === 'ice') {
        pokemonType2.innerHTML = 'Gelo';
      } else if (pokemonType2.innerHTML === 'water') {
        pokemonType2.innerHTML = 'Água';
      } else { }
    }

    input.value = '';
  } else {
    pokemonFrontImage.style.display = 'none';
    pokemonName.innerHTML = 'Não encontrado';
    pokemonNumber.innerHTML = '';

    pokemonHp.innerHTML = '';
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

function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}