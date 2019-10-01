// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    //console.log(props.todoItems);
    //console.log(props.toggleItem);
    //console.log(props.clearCompleted);
    return (
        <div
        className="todo-list">
            {props.todoItems.map(item => (
            <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button>

        </div>
    );
};

export default TodoList;