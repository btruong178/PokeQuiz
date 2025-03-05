import React, { useState, useEffect } from 'react';
import '../css/type_quiz.css';


const arrayOfSelectedPokemonTypes = (str) => {
    try {
        const splitStr = str.split('/');
        return splitStr.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
    } catch (error) {
        console.error('Error creating arrayOfSelectedPokemonTypes:', error);
    }
};

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

const availableTypes = [
    'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
    'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug',
    'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'
];


function Types({ onTypeSelect, damageSelections, currentDamage, currentType }) {
    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
        setSelectedTypes(damageSelections[currentType][currentDamage] || []);
    }, [damageSelections, currentDamage, currentType]);

    const handleButtonClick = (type) => {
        let newSelectedTypes;
        if (damageSelections[currentType][currentDamage].includes(type)) {
            newSelectedTypes = damageSelections[currentType][currentDamage].filter(t => t !== type);

        } else {
            newSelectedTypes = [...damageSelections[currentType][currentDamage], type];
        }
        damageSelections[currentType][currentDamage] = newSelectedTypes;
        setSelectedTypes(newSelectedTypes);
        onTypeSelect(damageSelections);
    };

    return (
        <div className="type-selector">
            <h3>Pick the Correct Types!</h3>
            <div className="button-group">
                {availableTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => handleButtonClick(type)}
                        className={selectedTypes.includes(type) ? 'selected' : 'unselected'}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    );
}


function DamageSelector({ onDamageSelect }) {
    const [damage, setDamage] = useState('doubleTo');

    const handleDamageChange = (event) => {
        const previousDamage = damage;
        const newDamage = event.target.value;
        setDamage(newDamage);
        onDamageSelect({ previousDamage, newDamage });
    };

    return (
        <div className="damage-selector">
            <div className="damage-outgoing">
                <h3>Damage Outgoing</h3>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            value="noDamageTo"
                            checked={damage === 'noDamageTo'}
                            onChange={handleDamageChange}
                        />
                        <span>0x</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="halfTo"
                            checked={damage === 'halfTo'}
                            onChange={handleDamageChange}
                        />
                        <span>0.5x</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="doubleTo"
                            checked={damage === 'doubleTo'}
                            onChange={handleDamageChange}
                        />
                        <span>2x</span>
                    </label>
                </div>
            </div>
            <div className="damage-incoming">
                <h3>Damage Incoming</h3>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            value="noDamageFrom"
                            checked={damage === 'noDamageFrom'}
                            onChange={handleDamageChange}
                        />
                        <span>0x</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="halfFrom"
                            checked={damage === 'halfFrom'}
                            onChange={handleDamageChange}
                        />
                        <span>0.5x</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="doubleFrom"
                            checked={damage === 'doubleFrom'}
                            onChange={handleDamageChange}
                        />
                        <span>2x</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export { arrayOfSelectedPokemonTypes, capitalizePokemonStrings, Types, DamageSelector };
