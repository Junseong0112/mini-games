import React from 'react';
import rockImg from '../assets/rock.svg';
import scissorImg from '../assets/scissor.svg';
import paperImg from '../assets/paper.svg';
const RANDOMIMGS = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg,
};
function HandIcon({ value, className = '' }) {
    const src = RANDOMIMGS[value];
    return React.createElement("img", { className: className, src: src, alt: value });
}
export default HandIcon;
