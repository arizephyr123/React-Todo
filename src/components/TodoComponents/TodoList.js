// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  //console.log("in TodoList", props);

  return (
    <>
      <button onClick={props.filterCompleted}>Clear Completed</button>
      {props.todos.map(item => {
        return (
          <div>
              <ul>
            <Todo 
            key={item.id} 
            item={item} 
            toggleCompleted={props.toggleCompleted}
            />
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
