import React from "react";
import './Button.css';

const Button = props => (
    <button
        onClick={() => props.clicked(`Нажата кнопка с текстом "${props.label}."`)}
        className={['Button', props.btnType].join(' ')}
    >
        {props.children}
    </button>
);

export default Button;