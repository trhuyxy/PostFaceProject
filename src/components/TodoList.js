import React from 'react'
import Todo from './Todo'
const TodoList = ({ todos, removeTodo, editChange, editComments, deleteComments }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} editChange={editChange} editComments={ editComments} deleteComments={deleteComments} />
      ))}
    </ul>
  );
}

export default TodoList;