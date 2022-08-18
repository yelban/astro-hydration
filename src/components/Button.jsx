import React from "react";

const Button = ({ children }) => {

    function handleOnClick() {
        console.log('Hello, Astro!');
    }

    return (
        <button type="button" onClick={handleOnClick}>{ children }</button>
    )
}

export default Button;
