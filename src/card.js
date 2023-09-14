import React from 'react';
import './card.css'

const Card = (props) => {
    /*
        props.children 表示组件的标签体

    */
    // props.children;
    return <div className={`card ${props.className}`}>{props.children}</div>
}

export default Card; 