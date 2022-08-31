import React, { useState } from 'react';

const SearchForm = ({ handleSearchSubmission }) => {

    const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearchSubmission(inputValue);
    }


    return <form onSubmit={handleSubmit}>
            <label htmlFor='search-box'>Git Username:</label>
            <input type="text" onChange={handleInput} value={inputValue} id="search-box" placeholder='please enter git username' required/><br></br><br></br>
            <input type="submit" value="Search"/>
           </form>
}

export default SearchForm;