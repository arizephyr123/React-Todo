// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
    this.submitTask = this.submitTask.bind(this)
  }

  //Q: grabs entry and sets it as task property in TodoForm state?
  handleChanges = e => {
    this.setState({
      task: e.target.value
    });
    // this.toggleItem = this.toggleItem.bind(this);
  };

  submitTask = e => {
    //Q: prevents whole page from refreshing?
    e.preventDefault();
    this.props.addItem(this.state.task);
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          value={this.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
