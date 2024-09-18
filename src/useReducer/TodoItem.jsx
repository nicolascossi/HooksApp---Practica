import React from 'react';

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className={`align-self-center ${todo.done && 'text-decoration-line-through'}`} onDoubleClick={() => onToggleTodo(todo.id)}>{todo.description}</span>
      <button 
        className="btn btn-danger" 
        onClick={() => onDeleteTodo(todo.id)} // Pasar directamente el id del todo a eliminar
      >
        Borrar
      </button>

      
    </li>
  );
}

export default TodoItem;
