import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
const Post = ({ todo, removeTodo, editComments, deleteComments }) => {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState(todo.comments)
  useEffect(() => {
    editComments({ c: comments, b: todo.id })
  }, [comments]);
  function handleRemoveClick() {
    if (window.confirm("Bạn muốn xóa bài post này không?")) {
      removeTodo(todo.id)
    }
  }
  function handleSubmitComment(e) {
    e.preventDefault();
    if (comment.trim()) {
      setComments(arr => [...arr, comment]);
      setComment("");
    }
  }
  function handleDeleteComment(id) {
    if (window.confirm("Bạn muốn xóa comment này không?")) {
      deleteComments({ delete_id: id, b: todo.id })
    }
  }
  return (
    <div className="postSection">
        <div className="moveMargin1">
          <li className="moveMargin">
            <p>
              {todo.task}
            </p>
          </li>
          <div className="btnGroup">
            <button class="deleteBtn" onClick={handleRemoveClick}>Xóa bài</button>
            <Link to={{pathname: `/postdetail/${todo.id}`, state: [{id: todo.id, task: todo.task}]}}>
              <button class="submitBtn" type="button">
               Chi tiết
              </button>
            </Link>
          </div>
          {comments ?
            <ul>
              {comments.map((todo, id) => (
                <li className="commentSection" key={id}>
                  <p>{todo}</p>
                  <div className="commentSectionBtn">
                    <button onClick={() => handleDeleteComment(id)}>Xóa</button>
                  </div>
                </li>
              ))}
            </ul>
            : <></>
          }
          <form className="commentPost" onSubmit={handleSubmitComment}>
            <input type="text" placeholder="Viết bình luận..." onChange={e => setComment(e.target.value)} value={comment} />
            <button type="submit">Đăng</button>
          </form>
        </div> 
    </div>
  );
}

export default Post;