// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.


import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    console.log('in TodoList', props);
    return(
        <>
            {props.todos.map(item =>{return(<Todo key={item.id} item={item}/>)} )}
        </>
    )

};

export default TodoList;