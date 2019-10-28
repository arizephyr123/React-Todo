// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from "react";

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  addTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {...item,completed: !item.completed};
        } else {
          return item;
        }
      })
    });
  };

  filterCompleted = item => {
    this.setState({
      todos: this.state.todos.filter(item.completed === true)
      });
};


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm todos={this.state.todos} addTodo={this.state.addTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
