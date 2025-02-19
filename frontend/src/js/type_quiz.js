import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { capitalizePokemonStrings, Types, DamageSelector } from './type_quiz_utility';
import '../css/type_quiz.css';

const randomPokemon = "http://localhost:5000/pokemon/random_pokemon";

function TypeQuiz() {
    const [pokemon, setPokemon] = useState(null);
    // User selected type advantage and weakness data
    const [doubleDamageToSelection, setDoubleDamageToSelection] = useState([]);
    const [doubleDamageFromSelection, setDoubleDamageFromSelection] = useState([]);

    const [halfDamageToSelection, setHalfDamageToSelection] = useState([]);
    const [halfDamageFromSelection, setHalfDamageFromSelection] = useState([]);

    const [noDamageToSelection, setNoDamageToSelection] = useState([]);
    const [noDamageFromSelection, setNoDamageFromSelection] = useState([]);

    // Correct type advantage and weakness data
    const [correctDoubleDamageTo, setCorrectDoubleDamageTo] = useState([]);
    const [correctDoubleDamageFrom, setCorrectDoubleDamageFrom] = useState([]);

    const [correctHalfDamageTo, setCorrectHalfDamageTo] = useState([]);
    const [correctHalfDamageFrom, setCorrectHalfDamageFrom] = useState([]);

    const [correctNoDamageTo, setCorrectNoDamageTo] = useState([]);
    const [correctNoDamageFrom, setCorrectNoDamageFrom] = useState([]);


    // Fetch random Pokémon
    useEffect(() => {
        const fetchRandomPokemon = async () => {
            try {
                const response = await axios.get(randomPokemon);
                setPokemon(response.data);
            } catch (error) {
                console.error('Error fetching random Pokémon:', error);
            }
        };

        fetchRandomPokemon();
    }, []);
    // Logging user selected type advantage and weakness data
    useEffect(() => {
        console.log("Updated Double Damage To:", doubleDamageToSelection);
    }, [doubleDamageToSelection]);

    // Functions to update user selected type advantage and weakness data
    const updateSelection = (newSelectedTypes) => {
        setDoubleDamageToSelection(newSelectedTypes);
        // When user selects a type, check what damage is toggled to set that type to the right category
        // e.g, double damage to, double damage from, half damage to, half damage from, no damage to, no damage from
    }



    return (
        <div className="whole-page">
            <h1 className="title">Type Advantage & Weakness Quiz</h1>
            <div className="battleground">
                <div className="pokemon">
                    <div className="pokemon-text">
                        <h2>Pokémon</h2>
                        <p className="">{pokemon ? capitalizePokemonStrings(pokemon.name) : 'Loading...'}</p>
                        <p className="">{pokemon ? capitalizePokemonStrings(pokemon.type) : 'Loading...'}</p>
                    </div>
                </div>
                <div className="typesanddamage">
                    <Types onTypeSelect={updateSelection}></Types>
                    <DamageSelector onDamageSelect={updateSelection}></DamageSelector>
                </div>

            </div>

        </div>
    );
}

export default TypeQuiz;