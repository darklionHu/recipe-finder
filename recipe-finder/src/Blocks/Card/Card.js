import React from 'react';
import './Card.css';
export default function Card(props) {
    const { img, name, desc } = props;

    return (
        <div className="card ingredient">
            <img src={img} alt="Ingredient"/>
            <h1>{name}</h1>
            <p>{desc}</p>
        </div>
    )
}