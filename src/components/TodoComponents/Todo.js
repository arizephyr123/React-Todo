//- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react";

const Todo = props => {
    //console.log('in Todo', props);
  return (
    <div
    className={`todo${props.item.completed ? ' toggled':''}`}
    onClick={() => props.toggleCompleted(props.item.id)}
    >
      <li>{props.item.task}</li>
    </div>
  );
};

export default Todo;
