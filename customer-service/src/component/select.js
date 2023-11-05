import React from "react";


const Select = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className='form-label mt-3'>{props.title}</label>
            <select id={props.name} name={props.name} value={props.value} onChange={props.handleChange} className="form-control w-100"
            >
                <option value="" disabled>
                    {props.placeholder}
                </option>
                {props.option.map((option) => {
                    return (
                        <option key={option} value={option} label={option}>
                            {option}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select