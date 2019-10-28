import React from 'react';

const TodoForm = props => {
return (
    <div>
        <form>
            <label></label>
            <input
            type='text'
            value={props.todos.task}
            
            />
            <button>Add Todo</button>
        </form>
    </div>
)
};

export default TodoForm;