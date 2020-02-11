import React from 'react';
import {Card} from "../TodoStyle"
const Item = props => {
    return(
        <Card
        style={{textDecoration:props.item.completed ? 'line-through': ""}}
            onClick={() => props.handleToggle(props.item.id)}
        >
            <p>{props.item.task}</p>
        </Card>
    )
};

export default Item;