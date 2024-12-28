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

const testPokeAPI = async () => {
    try {
        const pokemonID = Math.floor(Math.random() * 1025) + 1;
        const { pokemonName, pokemonTypes } = await fetchPokemonData(pokemonID);
    } catch (error) {
        logError(error);
    }
};

testPokeAPI();

