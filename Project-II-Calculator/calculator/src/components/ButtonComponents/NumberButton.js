import React from 'react';
import './Button.scss';

const NumberButton = props => {
    return (
        <div>   
            <button className={`basicButtonStyles ${props.buttonStyles}`}>{props.text}</button>
        </div>
    )
}

export default NumberButton;
