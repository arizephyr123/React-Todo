// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.State = {
      task: ""
    };
  }


  //Q: grabs entry and sets it as task property in TodoForm state?
  handleChange = e => {
    this.setState({
      [e.target.task]: e.target.value
    });
  };

  submitTask = e => {
      //Q: prevents whole page from refreshing?
    e.preventDefault();
    this.props.addItem(this.state.task);
  };

  render() {
    return (
      <form on Submit={this.submitTask}>
        <input
          type="text"
          vaule={this.task}
          name="task"
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
