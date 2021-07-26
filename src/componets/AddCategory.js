import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    // const [inputValue, setInputValue] = useState(); //undefined
    const [inputValue, setInputValue] = useState(''); //empty string

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue( e.target.value);
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        // setCategories( cats => [...cats, 'HunterXHunter']);
        if (inputValue.trim().length > 2) {
            setCategories( cats => [...cats, inputValue]);
            setInputValue('');
        }
     }

    return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Search...' 
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}
