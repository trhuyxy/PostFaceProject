import React, { useState } from "react";
import uuid from 'uuid';
import { useHistory } from "react-router-dom";
const TodoForm = ({ addTodo }) => {
  let history = useHistory();
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    comments: [],
  })
  //Sử lý sự kiện thay đổi input
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value })
  }
  //Gửi thông tin 
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      //reset task input
      setTodo({ ...todo, task: "" });
      history.push("/");
    }
  }
  function handleCancel(){
    history.goBack()
  }
  return (
    <form className="postInfor" onSubmit={handleSubmit}>
      <h3>Nơi đăng bài</h3>
      <div className="postInforInput">
        <input type="text" name="task" value={todo.task} onChange={handleTaskInputChange} placeholder="Bạn đang nghĩ gì ?" />
      </div>
      <div className="postInforInputBtn">
        <button type="submit">Đăng bài</button>
        <button onClick={handleCancel}>Huỷ</button>
      </div>
    </form>
  );
}

export default TodoForm;