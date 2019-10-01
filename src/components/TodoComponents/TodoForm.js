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
  }

  // grabs entry and sets it as task property in TodoForm state
  handleChanges = e => {
    this.setState({
      task: e.target.value
    });
    // this.toggleItem = this.toggleItem.bind(this);
  };

  submitTask = e => {
    // prevents whole page from refreshing and loosing added todo
    e.preventDefault();
    this.props.addItem(this.state.task);
    //trying to clear text input
    this.setState({
      task: ""
    });
  };

  resetInput = e =>{
    document.getElementById("input").value= "";

  }

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
        id="input"
          defaultValue=""
          type="text"
          value={this.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button onClick={this.resetInput}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
