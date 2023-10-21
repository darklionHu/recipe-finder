import React from 'react';
import './Result.css';

export default function Result(props) {
    const { img, name, desc } = props;

    return (
        <div className="result-card">
            <img src={img} alt="Result"/>
            <div>
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
}
