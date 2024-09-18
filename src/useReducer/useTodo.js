import { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReduces';

const useTodo = () => {
  const init = () => {
    const todosFromLocalStorage = localStorage.getItem('todos');
    try {
      // Verifica si `todosFromLocalStorage` es una cadena JSON válida
      return todosFromLocalStorage ? JSON.parse(todosFromLocalStorage) : [];
    } catch (error) {
      // Si ocurre un error en JSON.parse, inicializa con un array vacío
      console.error('Error parsing todos from localStorage', error);
      return [];
    }
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, []);


  const handleNewTodo = (todo) => {
    dispatchTodo({
      type: '[ADD]',
      payload: todo,
    });
  };

  const handleDelete = (id) => {
    dispatchTodo({
      type: '[DELETE]',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: '[TOGGLE]',
      payload: id,
    });
  };

  return {
    todos,
    handleDelete,
    handleNewTodo,
    handleToggleTodo,
  };
};

export default useTodo;
