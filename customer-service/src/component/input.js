import React from 'react';


const Input = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.name} className='form-label mt-3'>{props.title}</label>
            <input 
            className='form-control w-100' 
            name={props.name}
            type={props.inputType}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input;