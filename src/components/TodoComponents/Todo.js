//- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react";

const Todo = item => {
    //console.log('in Todo', item);
  return (
    <div>
      <h3>{item.item.task}</h3>
    </div>
  );
};

export default Todo;
