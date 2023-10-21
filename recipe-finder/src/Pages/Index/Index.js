import React, { useState } from 'react';
import Ingredient from "../../Blocks/Card/Ingredient/Ingredient"
import IngredientFinder from "../../Blocks/IngredientFinder/IngredientFinder"
import RecipeTab from "../../Blocks/Recipes/RecipeTab"
import "./Index.css"

export default function Index() {
    const [IDs, setIDs] = useState([0]);

    return (
        <>
            <div id="card-collector">
                {IDs.map((id) => (
                    <Ingredient key={id} id={id} />
                ))}
            </div>
            <IngredientFinder />
            <RecipeTab />
        </>
    )
}
