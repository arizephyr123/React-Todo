// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react";

const Task = props => {
    console.log(props.todoItems);
    return (
        <div
        className={`item${props.todoItems.completed ? " completed" : ""}`}
        onClick={() => props.toggleItem(props.id)}
        >
            {/* <p>{props.todoItems}</p> */}
        </div>
    );
};

export default Task;