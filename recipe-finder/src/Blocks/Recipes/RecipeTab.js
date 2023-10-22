import React, { useEffect, useState } from 'react';
import './RecipeTab.css';
import data from '../../Data/Recipes.json';
import Recipe from '../../Blocks/Card/Recipe/Recipe';

export default function RecipeTab({ IDs }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const filteredRecipes = data.filter(item => item.req.some(req => IDs.includes(req)));
        setRecipes(filteredRecipes);
    }, [IDs]);

    return (
        <div id='recipe-tab'>
            {recipes.map((recipe, index) => {
                const ingredientsNeeded = recipe.req.filter(req => !IDs.includes(req)).length;
                return (
                    <Recipe
                        key={index}
                        img={recipe.img}
                        name={recipe.name}
                        desc={ingredientsNeeded ? `Requires ${ingredientsNeeded} more ingredient(s)` : `You have all the ingredients available!`}
                    />
                );
            })}
        </div>
    );
}
