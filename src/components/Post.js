import React, { useState, useEffect } from "react";
// import uuid from 'uuid';
const Post = ({ todo, removeTodo, editChange, editComments, deleteComments }) => {
  const [edit, setEdit] = useState(false)
  const [editContent, setEditContent] = useState(todo.task)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState(todo.comments)
  useEffect(() => {
    editComments({ c: comments, b: todo.id })
  }, [comments]);
  function handleRemoveClick() {
    if(window.confirm("Bạn muốn xóa bài post này không?")){
      removeTodo(todo.id)
    }
  }
  function handleEditContextChange(e) {
    setEditContent(e.target.value)
  }
  function handCancelEdit() {
    setEditContent(todo.task)
    setEdit(false)
  }
  function handleEditChange() {
    editChange({ text: editContent, a: todo.id })
    setEdit(false)
  }
  function handleSubmitComment(e) {
    e.preventDefault();
    if (comment.trim()) {
      setComments(arr => [...arr, comment]);
      setComment("");
    }
  }
  function handleDeleteComment(id) {
    if(window.confirm("Bạn muốn xóa comment này không?")){
      deleteComments({ delete_id: id, b: todo.id })
    }
  }
  return (
    <div className="postSection">
      {!edit ?
        <div className="moveMargin1">
          <li className="moveMargin">
            <p>
              {todo.task}
            </p>
          </li>
          <div className="btnGroup">
            <button onClick={handleRemoveClick}>Xóa bài</button>
            <button onClick={() => setEdit(true)}>Sửa bài</button>
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
        </div> :
        <div className="moveMargin1">
          <input className="moveMargin" type="text" name="post" onChange={handleEditContextChange} value={editContent} />
          <div className="btnGroup">
            <button onClick={handCancelEdit}>Hủy</button>
            <button onClick={handleEditChange}>Đăng bài</button>
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
        </div>}
    </div>
  );
}

export default Post;