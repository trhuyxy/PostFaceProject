import React, { useState } from "react";
import { useLocation, useHistory } from 'react-router-dom'
const PostEdit = ({ editChange }) => {
  let location = useLocation();
  let history = useHistory();
  console.log(location);
  const [editContent, setEditContent] = useState(location.state[0].task)
  function handleEditContextChange(e) {
    setEditContent(e.target.value)
  }
  function handleEditChange() {
    editChange({ text: editContent, a: location.state[0].id })
    alert("Bạn đã chỉnh sửa thành công")
    history.push("/")
  }
  function handleGoBack() {
    history.goBack();
  }
  return (
    <div>
      <input className="editInput" type="text" name="post" onChange={handleEditContextChange} value={editContent} />
      <div className="editBtnGroup">
        <button class="deleteBtn" onClick={handleGoBack}>Hủy</button>
        <button class="submitBtn" onClick={handleEditChange}>Đăng bài</button>
      </div>
    </div>

  );
}

export default PostEdit;