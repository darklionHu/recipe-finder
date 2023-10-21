import React from 'react';
import '../Card.css';
import data from "../../../Data/Ingredients.json"
export default function Ingredient(props) {
    const { id } = props;

    return (
        <div className="card ingredient">
            <img src={data[id].img} alt="Ingredient"/>
            <h1>{data[id].name}</h1>
            <p>{data[id].desc}</p>
        </div>
    )
}