let currentPokemon, pokeId, $pokeTag;
const $pokemonNames = [];

// Variables told find the "area" things are appended to
const $pokeTagArea = $('#poketag-area')
const $pokeBall = $('.pokeball-selector')
const $typeArea = $('#type')
const $weaknessArea = $('#weakness')

// Variables that need to change or update
let $pokeImage = $('#pokemon-img')
let $pokeName = $('#poke-name')
let prevPokemon = 2
let translation = 0
let rotation = 0

// Get all pokemon names (up to 500), put it in $pokemonNames array, then add each one to their own button and create it.
function getAllPokemon(){ 
    $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon?limit=500`,
        }).then(
            (allPokemon) => {
                pokemonNames = allPokemon.results
                let i = 1;
                for(names of pokemonNames){
                    let newBtn = $(`<button value="${i}">${names.name}</button>`)
                    $pokeTagArea.append(newBtn)
                    i += 1
                }
            },

            (error) => {
                console.log('bad request', error)
            }
        )
}
getAllPokemon()

// Ajax call to get the current pokemon
function getSelectedPokemon(event) {
    event.preventDefault()

    if(event.target.tagName !== 'BUTTON'){
        return
    } else{
        $pokeTag = $(event.target)
        pokeId = $pokeTag.val()

        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokeId}`,
        }).then(
            (pokemon) => {
                currentPokemon = pokemon
                switchPokemon()
            },

            (error) => {
                console.log('bad request', error)
            }
        )
    }
}
$('body').click(getSelectedPokemon)

// Function to set pokemon name, image, and stats then display them
function renderPokemon(){
    // Set the pokemon name to the current name
    $pokeName.text(currentPokemon.species.name)

    // Creating a variable to hold the image link
    let imgLink = currentPokemon.sprites.other["official-artwork"].front_default
    $pokeImage.attr('src', imgLink)

    // On each click, clear the Types and Weaknesses so they don't stack
    $typeArea.html('')

    // Loop through the Types and Weaknesses and append them to the correct area
    for(type of currentPokemon.types){
        let typeItem = $(`<div>${type.type.name}</div>`)
        $typeArea.append(typeItem)
    }
}

// Function to switch pokemon -- Do stuff with the front end in this function (change photo, name, etc.)
function switchPokemon(){
    //Move the list up when clicked
    if(currentPokemon.id > prevPokemon && currentPokemon.id === prevPokemon + 1){
        // Set translation of the list to -75px more than previously
        translation -= 75;
        $pokeTagArea.css({'transform': `translateY(${translation}px)`})
        $pokeTagArea.css({'transition': '1s'})

        // Set rotation of the pokeball to +30deg more than previously
        rotation += 30
        $pokeBall.css({'transform': `rotate(${rotation}deg)`})
        $pokeBall.css({'transition': '1s'})

        renderPokemon()

        prevPokemon = currentPokemon.id
    } else if(currentPokemon.id < prevPokemon && currentPokemon.id === prevPokemon - 1){
        // Set translation to +75px more than previously
        translation += 75;
        $pokeTagArea.css({'transform': `translateY(${translation}px)`})
        $pokeTagArea.css({'transition': '1s'})

        // Set rotation of the pokeball to -30deg more than previously
        rotation -= 30
        $pokeBall.css({'transform': `rotate(${rotation}deg)`})
        $pokeBall.css({'transition': '1s'})

        renderPokemon()

        prevPokemon = currentPokemon.id
    }
}

