import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    capitalizePokemonStrings, Draggable, TypeAdvantagePokemon1, TypeDisadvantagePokemon1
} from './type_quiz_utility';
import '../css/type_quiz.css';

const randomPokemon = "http://localhost:5000/pokemon/random_pokemon";

function TypeQuiz() {
    const [pokemon1, setPokemon1] = useState(null);
    const [droppedTypeName, setdroppedTypeName] = useState(null);

    useEffect(() => {
        const fetchRandomPokemon = async () => {
            try {
                const response1 = await axios.get(randomPokemon);
                setPokemon1(response1.data);
            } catch (error) {
                console.error('Error fetching random Pokémon:', error);
            }
        };

        fetchRandomPokemon();
    }, []);

    const handleDropInParent = (id) => {
        if (id === 'pokemon1' && pokemon1) {
            setdroppedTypeName(capitalizePokemonStrings(pokemon1.name));
        };
    };

    return (
        <div className="whole-page">
            <h1 className="title">Type Advantage & Weakness Quiz</h1>
            <div className="battleground">
                <div className="pokemon-1">
                    <div className="pokemon-1-text">
                        <Draggable id="pokemon1">{pokemon1 ? capitalizePokemonStrings(pokemon1.name) : 'Loading...'}</Draggable>
                        <p className="text">{pokemon1 ? capitalizePokemonStrings(pokemon1.type) : 'Loading...'}</p>
                    </div>
                </div>
                <TypeAdvantagePokemon1 handleDropFromParent={handleDropInParent} droppedName={droppedTypeName} />
                <TypeDisadvantagePokemon1 handleDropFromParent={handleDropInParent} droppedName={droppedTypeName} />
            </div>

        </div>
    );
}

export default TypeQuiz;