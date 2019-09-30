// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.
//======================
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

// call constructor class and super to inherit parent properties/methods

//=============================

import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm"

const itemData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: itemData
    };
  }

  toggleItem = id => {
    //update state, loop through array, find which element was clicked, update the completed property
    console.log("In toggleId. Id=", id);

    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            // same as passing in each item property and current value
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    //grabs data from entered item, creates a new object, sets default to not completed
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      todoItems: this.state.todoItems.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>To Do:</h2>
          <TodoForm addItem={this.addItem}/>
        </div>
      </div>
    );
  }
}

export default App;
