import React from 'react';
import { ScoreArticle, ScoreBox } from 'styles/Global';
function Score({ score, otherScore }) {
    return (React.createElement(ScoreArticle, null,
        React.createElement(ScoreBox, null,
            React.createElement("h2", null, score),
            React.createElement("span", null, "\uB098")),
        React.createElement("p", null, ":"),
        React.createElement(ScoreBox, null,
            React.createElement("h2", null, otherScore),
            React.createElement("span", null, "\uC0C1\uB300"))));
}
export default Score;
