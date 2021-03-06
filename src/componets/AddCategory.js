import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); //empty string

    const handleInputChange = (e) => {

        setInputValue( e.target.value);

        console.log('handleInputChange llamado');
     }

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit', inputValue);
        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats]);
            // setCategories( 123654654); //probando que debe recibir cualquier tipo de function. 
            setInputValue('');
        }
     }

    return (
            <form onSubmit={handleSubmit}>
                <p>{inputValue}</p>
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
