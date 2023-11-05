import React from "react";


const Textarea = (props) => {
    return (
        <div className="form-group">
            <label className="form-label mt-3">
                {props.title}
            </label>
            <textarea 
            className="form-control w-100"
            name={props.name}
            rows={props.rows}
            cols={props.cols}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            />
        </div>
    )
}

export default Textarea;