import axios from 'axios';
import pool from '../db.js';


const LINE_SEPARATOR = '----------------------------------------';
const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// Utility function for logging errors
const logError = (error) => {
    console.error('Error Details from attempting to fetch PokeAPI Data: ', error);
    console.error(LINE_SEPARATOR);
    if (error.response) {
        console.error('Error Response Data: ', error.response.data);
        console.error('Error Response Status: ', error.response.status);
        console.error('Error Response Headers: ', error.response.headers);
    } else if (error.request) {
        console.error('Error Request Data: ', error.request);
    } else {
        console.error('Error Message: ', error.message);
    }
    console.error(LINE_SEPARATOR);
};

// Function to fetch Pokémon data
const fetchPokemonData = async (pokemonID) => {
    const response = await axios.get(`${POKEAPI_BASE_URL}${pokemonID}`);
    const { forms, types, id } = response.data;
    const pokemonName = forms[0].name;
    const pokemonTypes = types.map(t => t.type.name).join('/');
    console.log(`Pokémon ID: ${id}`);
    console.log(`Pokémon Name: ${pokemonName}`);
    console.log(`Pokémon Types: ${pokemonTypes}`);
    return { pokemonName, pokemonTypes };
};

// Check if the database connection is established function
const checkDBConnection = () => {
    console.log('Pool Credentials:', pool.options);
}



const addToDataBase = async () => {
    try {
        for (let i = 1; i <= 1025; i++) {
            const { pokemonName, pokemonTypes } = await fetchPokemonData(i);
            const newPokemon = await pool.query('INSERT INTO pokemon (name, type) VALUES ($1, $2) RETURNING *', [pokemonName, pokemonTypes]);
            console.log(newPokemon.rows[0]);
        }
    } catch (error) {
        logError(error);
    }
};


// addToDataBase();
checkDBConnection();


// https://pokeapi.co/api/v2/pokemon =  id, name, type(https://pokeapi.co/api/v2/type), image,
//                                      cries, height, weight, abilities, species(https://pokeapi.co/api/v2/pokemon-species)
// https://pokeapi.co/api/v2/pokemon-species = flavor_text_entries, generation("https://pokeapi.co/api/v2/generation")
// https://pokeapi.co/api/v2/generation = main_region
// https://pokeapi.co/api/v2/type = damage_relations

