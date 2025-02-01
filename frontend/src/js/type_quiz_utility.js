import React from 'react';
import '../css/type_quiz.css';

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

function Draggable({ id, children }) {
    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', id);
    };

    return (
        <div className="text" onDragStart={handleDragStart} draggable="true">
            {children}
        </div>
    );
}

function TypeAdvantagePokemon1({ handleDropFromParent, droppedName }) {
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData('text');
        handleDropFromParent(id);
    };

    return (
        <div className="type-advantage" onDragOver={handleDragOver} onDrop={handleDrop}>
            {droppedName || 'Drop here'}
        </div>
    );
}

function TypeDisadvantagePokemon1({ handleDropFromParent, droppedName }) {
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData('text');
        handleDropFromParent(id);
    };

    return (
        <div className="type-disadvantage" onDragOver={handleDragOver} onDrop={handleDrop}>
            {droppedName || 'Drop here'}
        </div>
    );
}

export { capitalizePokemonStrings, Draggable, TypeAdvantagePokemon1, TypeDisadvantagePokemon1 };

