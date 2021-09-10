// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const display = document.querySelector('.pokedex-display');
const idArea = document.querySelector('.pokemon-id-display');
const typeArea = document.querySelector('.pokedex-type');
const weakArea = document.querySelector('.pokedex-weakness');
const pokeBall = document.querySelector('.pokeball-selector');
const pokeTags = document.querySelector('.pokemon-tags');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// Object for Ivysaur
const ivysaur = {
    name: 'Ivysaur',
    type: ['Grass', ' Poison'],
    weakness: ['Fire', ' Psychic', ' Flying', ' Ice'],
    id: 2,
    createPokemon: function () {
        // Set everything to be empty before creating.
        display.innerHTML = '';
        idArea.innerHTML = '';
        typeArea.innerHTML = '';
        weakArea.innerHTML = '';

        // Creates the elements that will be appended to the display
        const typeLabel = document.createElement('h3');
        const weakLabel = document.createElement('h3');
        const pokemon = document.createElement('div');
        const newImg = document.createElement('img');
        const pokemonID = document.createElement('span');
        const pokemonType = document.createElement('div');
        const pokemonWeakness = document.createElement('div');

        // Sets the content inside of the elements we just created
        pokemonType.innerText = this.type;
        pokemon.classList.add('pokemon')
        pokemonID.innerText = `#${this.id}`;
        newImg.src = `${baseURL}${this.id}.png`;
        pokemonWeakness.innerText = this.weakness;
        typeLabel.innerText = 'Type:';
        weakLabel.innerText = 'Weaknesses:';

        // Appends all of the finished elements to their designated areas
        pokemon.appendChild(newImg);
        display.appendChild(pokemon)
        idArea.appendChild(pokemonID);
        typeArea.appendChild(pokemonType);
        weakArea.appendChild(pokemonWeakness);
        typeArea.appendChild(typeLabel);
        weakArea.appendChild(weakLabel);
    }
}

// Object for Charmeleon
const charmeleon = {
    name: 'Charmeleon',
    type: ['Fire'],
    weakness: ['Water', ' Ground', ' Rock'],
    id: 5,
    createPokemon: function () {
        // Set everything to be empty before creating.
        display.innerHTML = '';
        idArea.innerHTML = '';
        typeArea.innerHTML = '';
        weakArea.innerHTML = '';

        // Creates the elements that will be appended to the display
        const typeLabel = document.createElement('h3');
        const weakLabel = document.createElement('h3');
        const pokemon = document.createElement('div');
        const newImg = document.createElement('img');
        const pokemonID = document.createElement('span');
        const pokemonType = document.createElement('div');
        const pokemonWeakness = document.createElement('div');


        // Sets the content inside of the elements we just created
        pokemonType.innerText = this.type;
        pokemon.classList.add('pokemon');
        pokemonID.innerText = `#${this.id}`;
        newImg.src = `${baseURL}${this.id}.png`;
        pokemonWeakness.innerText = this.weakness;
        typeLabel.innerText = 'Type:';
        weakLabel.innerText = 'Weaknesses:';

        // Appends all of the finished elements to their designated areas
        pokemon.appendChild(newImg);
        display.appendChild(pokemon);
        idArea.appendChild(pokemonID);
        typeArea.appendChild(pokemonType);
        weakArea.appendChild(pokemonWeakness);
        typeArea.appendChild(typeLabel);
        weakArea.appendChild(weakLabel);
    }
}

// Object for Deoxys
const deoxys = {
    name: 'Deoxys',
    type: ['Psychic'],
    weakness: ['Ghost', ' Dark', ' Bug'],
    id: 386,
    createPokemon: function () {
        // Set everything to be empty before creating.
        display.innerHTML = '';
        idArea.innerHTML = '';
        typeArea.innerHTML = '';
        weakArea.innerHTML = '';

        // Creates the elements that will be appended to the display
        const typeLabel = document.createElement('h3');
        const weakLabel = document.createElement('h3');
        const pokemon = document.createElement('div');
        const newImg = document.createElement('img');
        const pokemonID = document.createElement('span');
        const pokemonType = document.createElement('div');
        const pokemonWeakness = document.createElement('div');

        // Sets the content inside of the elements we just created
        pokemonType.innerText = this.type;
        pokemon.classList.add('pokemon')
        pokemonID.innerText = `#${this.id}`;
        newImg.src = `${baseURL}${this.id}.png`;
        pokemonWeakness.innerText = this.weakness;
        typeLabel.innerText = 'Type:';
        weakLabel.innerText = 'Weaknesses:';

        // Appends all of the finished elements to their designated areas
        pokemon.appendChild(newImg);
        display.appendChild(pokemon)
        idArea.appendChild(pokemonID);
        typeArea.appendChild(pokemonType);
        weakArea.appendChild(pokemonWeakness);
        typeArea.appendChild(typeLabel);
        weakArea.appendChild(weakLabel);
    }
}

function selectDeoxys() {
    deoxys.createPokemon();
    pokeBall.style.transform = "rotate(30deg)";
    pokeBall.style.transition = "1s";
    pokeTags.style.transform = "translateY(-80px)";
    pokeTags.style.transition = "1s";
}

function selectIvysaur() {
    ivysaur.createPokemon();
    pokeBall.style.transform = "rotate(-30deg)";
    pokeBall.style.transition = "1s";
    pokeTags.style.transform = "translateY(80px)";
    pokeTags.style.transition = "1s";
}

function selectCharmeleon() {
    charmeleon.createPokemon();
    pokeBall.style.transform = "rotate(0deg)";
    pokeBall.style.transition = "1s";
    pokeTags.style.transform = "translateY(0px)";
    pokeTags.style.transition = "1s";
}