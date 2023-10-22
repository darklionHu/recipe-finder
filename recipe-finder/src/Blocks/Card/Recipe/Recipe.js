import React from 'react';
import '../Card.css';
import data from "../../../Data/Recipes.json";

export default function Recipe({ img, name, desc }) {
    function onClick() {
        console.log("id")
    }
    return (
        <button onClick={onClick} className="card ingredient">
            <img src={img} alt="Recipe" />
            <h1>{name}</h1>
            <p>{desc}</p>
        </button>
    );
}
