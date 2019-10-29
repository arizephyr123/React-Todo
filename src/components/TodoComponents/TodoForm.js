import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
    };
  }

  //grabs input text and saves as newTodo in state
  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  //on submit adds newTodo to master todo list stored in App state in App.js
  handleSubmit = e => {
    //prevents default page reload
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.state.newTodo= "";
  };

  

  render() {
    console.log("in TodoForm", this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label></label>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
          />
          <button>Add Todo</button>
          
        </form>
      </div>
    );
  }
}

export default TodoForm;
