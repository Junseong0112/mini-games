import React from 'react';
import Reset from '../assets/ic-reset.svg';
function Button({ className, onClick }) {
    return (React.createElement("button", { className: className, onClick: onClick },
        React.createElement("img", { src: Reset, alt: "Rest" })));
}
export default Button;
