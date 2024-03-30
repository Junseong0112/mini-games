import React from 'react';
import HandIcon from './HandIcon';
import '../styles/HandButton.css';
function HandButton({ value, onClick }) {
    const handleClick = () => onClick(value);
    return (React.createElement("button", { className: "HandButton", onClick: handleClick },
        React.createElement(HandIcon, { className: "HandButton-icon", value: value })));
}
export default HandButton;
