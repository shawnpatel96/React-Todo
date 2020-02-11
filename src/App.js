import React from 'react';
import TaskList from './components/TodoComponents/TodoList';
import TaskForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      task: '',
      tasks: []
    };
  }
  addTask = event => {
    event.preventDefault();
    const newTask = { 
      task: this.state.task, 
      completed: false, 
      id: Date.now() };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      task: ''
    });
  };
  

  handleToggle = id => {
    let tasks = this.state.tasks.slice();
    tasks = tasks.map(task => {
      if(task.id === id){
        task.completed = !task.completed;
        return task;
      }else{
        return task;
      }
    });
    this.setState({tasks});
  };
  
 

  clear = e => {
    e.preventDefault();
    let tasks = this.state.tasks.filter(task => !task.completed);
    this.setState({tasks});
  };

  render() {
    console.log('rendering...');
    return (
          <div className="App">
          <h1>Welcome to your Todo App!</h1>
          <TaskForm 
            value={this.state.task}
            handleChange={e=> this.setState({[e.target.name]: e.target.value})}  // if more than one  set event to variable like so || changeTask = e => this.setState({[e.target.name]: e.target.value});
            handleAdd={this.addTask}
            handleClear={this.clear}
          />
          <TaskList 
          handleToggle={this.handleToggle}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
