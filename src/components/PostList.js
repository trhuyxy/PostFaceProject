import React from 'react'
import Post from './Post'
const PostList = ({ todos, removeTodo, editChange, editComments, deleteComments }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Post key={todo.id} todo={todo} removeTodo={removeTodo} editChange={editChange} editComments={ editComments} deleteComments={deleteComments} />
      ))}
    </ul>
  );
}

export default PostList;