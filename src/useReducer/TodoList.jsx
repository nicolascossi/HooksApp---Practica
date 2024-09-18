import TodoItem from './TodoItem';

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      {todos.length === 0 ? (
        <h4>No hay tareas pendientes</h4> // Mostrar este mensaje si no hay tareas
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
        ))
      )}
    </>
  );
}

export default TodoList;
