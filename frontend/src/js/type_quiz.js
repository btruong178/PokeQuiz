import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { arrayOfSelectedPokemonTypes, capitalizePokemonStrings, Types, DamageSelector, TypeToggle } from './type_quiz_utility';
import '../css/type_quiz.css';

const randomPokemon = "http://localhost:5000/pokemon/random_pokemon";

function TypeQuiz() {
    const [pokemon, setPokemon] = useState(null);
    const [damage, setDamage] = useState('doubleTo');
    const [types, setTypes] = useState([]);
    const [currentType, setCurrentType] = useState(null);
    const [damageSelections, setDamageSelections] = useState({});
    // Correct type advantage and weakness data
    const [correctTypeAdvantage, setCorrectTypeAdvantage] = useState({
        doubleTo: [],
        doubleFrom: [],
        halfTo: [],
        halfFrom: [],
        noDamageTo: [],
        noDamageFrom: [],
    });

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
    // Initialize
    useEffect(() => {
        if (pokemon) {
            const newTypes = arrayOfSelectedPokemonTypes(pokemon.type);
            setTypes(newTypes);
            setCurrentType(newTypes[0]);
            console.log("UseEffect => New Types: ", newTypes);
            console.log("UseEffect => Current Type: ", newTypes[0]);
            if (newTypes.length > 0) {
                const newDamageSelections = {};
                newTypes.forEach((type) => {
                    newDamageSelections[type] = {
                        doubleTo: [],
                        doubleFrom: [],
                        halfTo: [],
                        halfFrom: [],
                        noDamageTo: [],
                        noDamageFrom: [],
                    };
                });
                setDamageSelections(newDamageSelections);
                console.log("UseEffect => Initial Damage Selections: ", newDamageSelections);
            }
        }
    }, [pokemon]);
    // Functions to update user selected type advantage and weakness data
    const updateTypeSelection = (damageSelections) => {
        console.log("Updating Type Selections");
        setDamageSelections(damageSelections);
        console.log("New Type Selections: ", damageSelections);
    }

    const updateDamageSelection = ({ previousDamage, newDamage }) => {
        console.log("Update Damage Selection");
        setDamage(newDamage);
        console.log("New Damage:", newDamage);

    }
    const updateCurrentType = (type) => {
        console.log("Updating Current Type");
        setCurrentType(type);
        console.log("New Current Type: ", type);
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
                <div className="selectors">
                    <TypeToggle types={types} currentType={currentType} onTypeToggle={updateCurrentType} ></TypeToggle>
                    <DamageSelector onDamageSelect={updateDamageSelection}></DamageSelector>
                    <Types onTypeSelect={updateTypeSelection} damageSelections={damageSelections} currentDamage={damage}
                        currentType={currentType}></Types>


                </div>

            </div>

        </div>
    );
}

export default TypeQuiz;