import React from 'react';
import './Button.scss';

const ActionButton = props => {
    return (
        <div>
            <button className={`basicButtonStyles ${props.buttonStyles}`}>{props.text}</button>
        </div>
    )
}
