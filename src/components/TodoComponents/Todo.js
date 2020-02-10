import React from 'react';

const Item = props => {
    return(
        <div
        style={{textDecoration:props.item.complete ? 'line-through': ""}}
            onClick={() => props.handleToggle(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
};

export default Item;