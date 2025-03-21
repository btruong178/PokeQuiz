import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { arrayOfSelectedPokemonTypes, capitalizePokemonStrings, Types, DamageSelector, TypeToggle } from './type_quiz_utility';
import '../css/type_quiz.css';
// API endpoint to fetch a random Pokémon
const randomPokemon = "http://localhost:5000/pokemon/random_pokemon";
// Main component for the type advantage and weakness quiz
function TypeQuiz() {
    const [pokemon, setPokemon] = useState(null);
    const [damage, setDamage] = useState('doubleTo');
    const [types, setTypes] = useState([]);
    const [currentType, setCurrentType] = useState(null);
    const [damageSelections, setDamageSelections] = useState({});
    // Correct type advantage and weakness data
    const [correctTypeAdvantage1, setCorrectTypeAdvantage1] = useState({
        doubleTo: [],
        doubleFrom: [],
        halfTo: [],
        halfFrom: [],
        noDamageTo: [],
        noDamageFrom: [],
    });
    const [correctTypeAdvantage2, setCorrectTypeAdvantage2] = useState({
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
            let newTypes = arrayOfSelectedPokemonTypes(pokemon.type);
            const initializeDamageSelections = (newTypes) => {
                setTypes(newTypes);
                setCurrentType(newTypes[0]);
                console.log("UseEffect => Types Array: ", newTypes);
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

            const getCorrectTypeAdvantage = async (type) => {
                try {
                    type = type.toLowerCase();
                    const response = await axios.get(`http://localhost:5000/pokemon/damage_relations/${type}`);
                    return response.data;
                } catch (error) {
                    console.error('Error fetching correct type advantage and weakness data:', error);
                }
            };
            const initializeCorrectTypeAdvantage = async (newTypes) => {
                if (newTypes.length === 1) {
                    const type = await getCorrectTypeAdvantage(newTypes[0]);
                    console.log("id: ", type.id);
                    console.log("name: ", type.name);
                    console.log("damage_relations: ", type.damage_relations);
                    setCorrectTypeAdvantage1(type.damage_relations);
                } else if (newTypes.length === 2) {
                    const [firstType, secondType] = await Promise.all([
                        getCorrectTypeAdvantage(newTypes[0]),
                        getCorrectTypeAdvantage(newTypes[1])
                    ]);

                    console.log("First Type - id:", firstType.id);
                    console.log("First Type - name:", firstType.name);
                    console.log("First Type - damage_relations:", firstType.damage_relations);

                    console.log("Second Type - id:", secondType.id);
                    console.log("Second Type - name:", secondType.name);
                    console.log("Second Type - damage_relations:", secondType.damage_relations);

                    setCorrectTypeAdvantage1(firstType.damage_relations);
                    setCorrectTypeAdvantage2(secondType.damage_relations);
                }
            };
            initializeDamageSelections(newTypes);
            // getCorrectTypeAdvantage(newTypes[0]);
            initializeCorrectTypeAdvantage(newTypes);
        };
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