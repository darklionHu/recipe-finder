import React from 'react';
import '../Card.css';
import data from "../../../Data/Ingredients.json";

export default function Ingredient({ id, setIDs, IDs }) {
    function onClick() {
        const updatedIDs = IDs.filter(itemID => itemID !== id);
        setIDs(updatedIDs);
    }

    return (
        <button onClick={onClick} className="card ingredient">
            <img src={data[id].img} alt="Ingredient" />
            <h1>{data[id].name}</h1>
            <p>{data[id].desc}</p>
        </button>
    );
}
