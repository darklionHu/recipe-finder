import React from 'react';
import './Result.css';

function Result(props) {
    const { img, name, desc, onClick } = props;

    return (
        <button onClick={() => onClick(name)} className="result-card">
            <img src={img} alt="Result"/>
            <div>
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
        </button>
    );
}

export default Result;
