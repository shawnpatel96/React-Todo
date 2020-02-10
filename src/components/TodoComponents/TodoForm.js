import React from 'react';

const ToDoForm = props => {
    console.log('rendering form');
    return(
        <form>
            
            <input 
                onChange={props.handleChange}
                type="text"
                name="task"
                value={props.value}
                placeholder="...tasks"
            />
            <button onClick={props.handleAdd}>Add</button>
            <button onClick={props.handleClear}>Clear</button>
        </form>
    )
};

export default ToDoForm;