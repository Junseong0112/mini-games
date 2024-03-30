import React from 'react';
import { ModalOverlay, ModalDiv } from 'styles/Global';
function Modal({ closeModal }) {
    return (React.createElement(ModalOverlay, null,
        React.createElement(ModalDiv, null,
            React.createElement("h2", null, "\uAC8C\uC784\uC124\uBA85"),
            React.createElement("ul", null,
                React.createElement("li", null, "1. 50\uC810\uC744 \uBA3C\uC800 \uB2EC\uC131\uD574\uBCF4\uC138\uC694!"),
                React.createElement("li", null, "2. \uBC30\uC810\uC744 \uC218\uC815\uD574\uC11C \uC9C4\uD589\uD574\uBCF4\uC138\uC694!"),
                React.createElement("li", null, "3. \uAC00\uBCCD\uAC8C \uC990\uACA8\uC8FC\uC2DC\uBA74 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4!")),
            React.createElement("button", { onClick: closeModal }, "\uB2EB\uAE30"))));
}
export default Modal;
