import React, { useState, useEffect } from 'react'
import './App.css';
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail';
import { PostContext } from './contexts/PostContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostEdit from './components/PostEdit';
const LOCAL_STOREAGE_KEY = "react-todo-list-todos"
function App() {
  //Lưu thông tin data
  const [todos, setTodos] = useState([])
  // Lấy thông tin từ localstorage
  useEffect(() => {
    const storeageTodos = JSON.parse(localStorage.getItem(LOCAL_STOREAGE_KEY))
    if (storeageTodos) {
      setTodos(storeageTodos)
    }
  }, [])
  //Lưu thông tin vào localstorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STOREAGE_KEY, JSON.stringify(todos))
  }, [todos])
  //Add thông tin vào data
  function addTodo(todo) {
    setTodos([...todos, todo])
  }
  //Xóa thông tin dựa vào id
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  function editChange(item) {
    console.log(item);
    const found = todos.findIndex(element => element.id === item.a);
    todos[found].task = item.text;
    setTodos([...todos])
  }
  function editComments(item) {
    const found = todos.findIndex(element => element.id === item.b);
    todos[found].comments = item.c;
    setTodos([...todos])
  }
  function deleteComments(item) {
    const found = todos.findIndex(element => element.id === item.b);
    todos[found].comments.splice(item.delete_id, 1);
    setTodos([...todos])
  }
  return (
    <Router>
      <div className="App">
        <h1>
          React Facebook post
        </h1>
        <PostContext.Provider value={todos}>
          <Switch>
            <Route exact path="/">
              <PostList className="postContent" removeTodo={removeTodo} editChange={editChange} editComments={editComments} deleteComments={deleteComments} />
            </Route>
            <Route path="/addpost">
              <PostForm className="postInformation" addTodo={addTodo} />
            </Route>
            <Route path="/postdetail/:id">
              <PostDetail />
            </Route>
            <Route path="/postedit/:id">
              <PostEdit editChange={editChange} />
            </Route>
          </Switch>
        </PostContext.Provider>
      </div>
    </Router>
  );
}

export default App;
