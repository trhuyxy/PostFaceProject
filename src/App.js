import React, { useState, useEffect } from 'react'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
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
    <div className="App">
      <h1>
        React Facebook post
      </h1>
      <TodoForm className="postInformation" addTodo={addTodo} />
      <TodoList className="postContent" todos={todos} removeTodo={removeTodo} editChange={editChange} editComments={editComments} deleteComments={deleteComments} />
    </div>
  );
}

export default App;
