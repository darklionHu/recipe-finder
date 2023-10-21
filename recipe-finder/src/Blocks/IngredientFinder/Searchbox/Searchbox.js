import React, { useState } from 'react';
import './Searchbox.css';

export default function Searchbox() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        console.log(value);
    };

    return (
        <input
            id="search-box"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search..."
        />
    );
}
