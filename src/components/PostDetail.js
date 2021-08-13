import React from "react";
import { useLocation, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
const PostDetail = () => {
  let location = useLocation();
  let history = useHistory();
  function handleGoBack() {
    history.goBack();
  }
  return (
    <div>
      <h2>Chi tiết bài post</h2>
      <p className="detailContent">{location.state[0].task}</p>
      <div>
        <button class="deleteBtn" onClick={handleGoBack}>Quay lại</button>
        <Link to={{ pathname: `/postedit/${location.state[0].id}`, state: [{ id: location.state[0].id, task: location.state[0].task }] }}>
          <button class="submitBtn" type="button">
            Sửa bài
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;