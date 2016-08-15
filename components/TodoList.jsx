import React, { PropTypes } from 'react';
import Todo from './Todo.jsx';

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => {
                    console.log('clicked:', todo.id)
                    onTodoClick(todo.id)
                }}
            />
        )}
    </ul>
)

TodoList.propTyes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
