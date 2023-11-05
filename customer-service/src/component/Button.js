import React from "react";


const Button = (props) => {
    return (
        <button
            onClick={props.onButtonClick}
            style={{ backgroundColor: props.backgroundColor, margin: "10px" }}
            className="btn text-white"
        >
            {props.title}
        </button>
    )
}

export default Button