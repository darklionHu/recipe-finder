import React, { useState } from 'react';
import Searchbox from './Searchbox/Searchbox';
import Result from './Result/Result';
import ingredientsData from '../../Data/Ingredients.json';

export default function IngredientFinder() {
    const [inputValue, setInputValue] = useState('');
    
    const filteredIngredients = ingredientsData.filter(ingredient => 
        ingredient.name.toLowerCase().includes(inputValue.toLowerCase())
    ).slice(0,4);

    return (
        <div>
            <Searchbox inputValue={inputValue} setInputValue={setInputValue} />
            <div id='result-holder'>
                {filteredIngredients.map((ingredient, index) => (
                    <Result key={index} img={ingredient.img} name={ingredient.name} desc={ingredient.desc} />
                ))}
            </div>
        </div>
    );
}
