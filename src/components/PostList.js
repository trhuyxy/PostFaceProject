import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'
const PostList = ({ todos, removeTodo, editChange, editComments, deleteComments }) => {
  return (
    <>
      <Link to="/addpost">Add</Link>
      <ul>
        {todos.map(todo => (
          <Post key={todo.id} todo={todo} removeTodo={removeTodo} editChange={editChange} editComments={editComments} deleteComments={deleteComments} />
        ))}
      </ul>
    </>
  );
}

export default PostList;