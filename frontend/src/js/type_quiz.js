import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/type_quiz.css';

const randomPokemon = "http://localhost:5000/pokemon/random_pokemon";

const capitalizePokemonStrings = (str) => {
    try {
        if (str.includes('/')) {
            const splitStr = str.split('/');
            return splitStr.map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('-');
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    } catch (error) {
        console.error('Error capitalizing Pokémon strings:', error);
    }
};

function TypeQuiz() {
    const [pokemon1, setPokemon1] = useState(null);
    const [pokemon2, setPokemon2] = useState(null);

    useEffect(() => {
        // Fetch random Pokémon
        const fetchRandomPokemon = async () => {
            try {
                const response1 = await axios.get(randomPokemon);
                const response2 = await axios.get(randomPokemon);
                console.log('Response1:', response1.data);
                console.log('Response2:', response2.data);
                setPokemon1(response1.data);
                setPokemon2(response2.data);
            } catch (error) {
                console.error('Error fetching random Pokémon:', error);
            }
        };

        fetchRandomPokemon();
    }, []);

    return (
        <div className="whole-page">
            <h1 className="title">Type Advantage & Weakness Quiz</h1>
            <div className="battleground">
                <div className="pokemon-1">
                    <div className="container">
                        <p className="text">{pokemon1 ? capitalizePokemonStrings(pokemon1.name) : 'Loading...'}</p>
                    </div>
                    <div className="container">
                        <p className="text">{pokemon1 ? capitalizePokemonStrings(pokemon1.type) : 'Loading...'}</p>
                    </div>
                </div>

                <div className="pokemon-2">
                    <div className="container">
                        <p className="text">{pokemon2 ? capitalizePokemonStrings(pokemon2.name) : 'Loading...'}</p>
                    </div>
                    <div className="container">
                        <p className="text">{pokemon2 ? capitalizePokemonStrings(pokemon2.type) : 'Loading...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypeQuiz;