// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react";
import "../../../src/styles.css"

const Todo = props => {
    // console.log("Todo props: ", props)
    // console.log("Todo props: ", props.item.task)
    // console.log("Todo props-toggleItem: ", props.toggleItem)
  return (
    <div
      className={`item${props.item.completed ? "-completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
        <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
