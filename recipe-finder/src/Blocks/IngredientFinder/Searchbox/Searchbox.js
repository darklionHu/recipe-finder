import React from 'react';
import './Searchbox.css';

export default function Searchbox({ inputValue, setInputValue }) {
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    return (
        <input
            id="search-box"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="What ingredients do you currently have in your household?"
        />
    );
}
