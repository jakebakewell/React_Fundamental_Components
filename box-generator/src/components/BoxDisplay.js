import React from 'react';

const BoxDisplay = (props) => {
    const { boxes } = props;
    return (
        <div className="container d-flex justify-content-evenly flex-wrap">
        {
        boxes.map( (item, i) => {
            return (
            <div key={i} style={item}></div>
            )
        }
        )
        }
        </div>
    );
}

export default BoxDisplay;