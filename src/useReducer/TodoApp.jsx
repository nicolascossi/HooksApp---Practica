import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReduces';
import Form from './Form';
import TodoList from './TodoList';
import useTodo from './useTodo';




const TodoApp = () => {

const { todos, handleDelete, handleNewTodo, handleToggleTodo } = useTodo();

console.log(todos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>TodoApp {todos.length}, <small>Pendientes: {todos.filter(todo => todo && !todo.done).length}</small></h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <TodoList todos={todos} onDeleteTodo={handleDelete} onToggleTodo={handleToggleTodo} />
          </ul>
        </div>
        <div className="col-5">
          <Form onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
