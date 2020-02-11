import React from 'react';
import {Button, Input} from "../TodoStyle"
const TaskForm = props => {
    console.log('rendering form');
    return(
        <form>
            
            <Input 
                onChange={props.handleChange}
                type="text"
                name="task"
                value={props.value}
                placeholder="...tasks"
            />
            <Button onClick={props.handleAdd}>Add</Button>
            <Button onClick={props.handleClear}>Clear</Button>
        </form>
    )
};

export default TaskForm;