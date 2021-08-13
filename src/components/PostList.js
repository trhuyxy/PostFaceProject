import React,{useContext} from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'
import { PostContext } from "../contexts/PostContext";
const PostList = ({ removeTodo, editChange, editComments, deleteComments }) => {
  const msg = useContext(PostContext)
  return (
    <>
      <Link to="/addpost">
        <button className="addPostBtn">Thêm Post</button>
      </Link>
      <ul>
        {msg.map(todo => (
          <Post key={todo.id} todo={todo} removeTodo={removeTodo} editChange={editChange} editComments={editComments} deleteComments={deleteComments} />
        ))}
      </ul>
    </>
  );
}

export default PostList;