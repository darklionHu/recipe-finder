import React, { useState } from 'react';
import Searchbox from './Searchbox/Searchbox';
import Result from './Result/Result';
import data from '../../Data/Ingredients.json';

export default function IngredientFinder({ setIDs, IDs }) {
    const [inputValue, setInputValue] = useState('');
    
    const filteredIngredients = data.filter(ingredient => 
        ingredient.name.toLowerCase().includes(inputValue.toLowerCase())
        && !IDs.includes(data.indexOf(ingredient))
    ).slice(0,4);

    function onClick(name) {
        const index = data.findIndex(ingredient => ingredient.name===name);
        if(!IDs.includes(index))
            setIDs(prevIngredients => [...prevIngredients, index])
    }

    return (
        <div>
            <Searchbox inputValue={inputValue} setInputValue={setInputValue} />
            <div id='result-holder'>
                {filteredIngredients.map((ingredient, index) => (
                    <Result key={index} img={ingredient.img} name={ingredient.name} desc={ingredient.desc} onClick={onClick} />
                ))}
            </div>
        </div>
    );
}
