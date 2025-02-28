import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { capitalizePokemonStrings, Types, DamageSelector } from './type_quiz_utility';
import '../css/type_quiz.css';

const randomPokemon = "http://localhost:5000/pokemon/random_pokemon";

function TypeQuiz() {
    const [pokemon, setPokemon] = useState(null);
    const [damage, setDamage] = useState('doubleTo');
    const [damageSelections, setDamageSelections] = useState({
        quadrupleTo: [],
        quadrupleFrom: [],
        doubleTo: [],
        doubleFrom: [],
        halfTo: [],
        halfFrom: [],
        noDamageTo: [],
        noDamageFrom: [],
    });
    // Correct type advantage and weakness data
    const [correctTypeAdvantage, setCorrectTypeAdvantage] = useState(
        {
            quadrupleTo: [],
            quadrupleFrom: [],
            doubleTo: [],
            doubleFrom: [],
            halfTo: [],
            halfFrom: [],
            noDamageTo: [],
            noDamageFrom: [],
        }
    );

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
    // Functions to update user selected type advantage and weakness data
    const updateTypeSelection = (damageSelections) => {
        console.log("Updating Type Selections Activated!");
        setDamageSelections(damageSelections);
        console.log("New Type Selections: ", damageSelections);
        // New idea: Use a Dictionary to store the selected types for each damage category
        // When a user selects a damage, check the array and set the types that correspond to that damage
        // If the user selects a type that is already in the array, remove it
        // If the user selects a type that is not in the array, add it
        // When the user submits the quiz, compare the selected types to the correct types
    }

    const updateDamageSelection = ({ previousDamage, newDamage }) => {
        console.log("Updating Damage Selection Activated!");
        console.log("Setting Damage to:", newDamage);
        setDamage(newDamage);
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
                    <Types onTypeSelect={updateTypeSelection} damageSelections={damageSelections} currentDamage={damage}></Types>
                    <DamageSelector onDamageSelect={updateDamageSelection}></DamageSelector>
                </div>

            </div>

        </div>
    );
}

export default TypeQuiz;