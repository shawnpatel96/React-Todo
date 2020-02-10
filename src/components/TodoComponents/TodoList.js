// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from "./Todo";

const ToDoList = props => {
    return(
        <div className="task-list">
            {props.tasks.map((item) => (
                <Item 
                    handleToggle={props.handleToggle}
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
};

export default ToDoList;