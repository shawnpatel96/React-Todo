import React from 'react';

const Item = props => {
    return(
        <div
            onClick={() => props.handleToggle(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
};

export default Item;