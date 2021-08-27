import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import About from './Components/About';
import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let initTodos = [];
  if(localStorage.getItem('todos') === null){
    initTodos = [];
  }
  else{
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }



  const [todos, setTodos] = useState(initTodos);  
  useEffect(() => {
  localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todos, title, desc) => {
    if (title === "" || desc === "") {
      alert("Title and desc cannot be empty!");
    } else {
      let key = todos.length + 1;
      
      setTodos([...todos, { key:key, Title: title, Desc: desc }]);
      localStorage.setItem("todos",JSON.stringify(todos));
      
      
    }
  }
  const onDelete = (item) => {

    setTodos(todos.filter((n) => {
      return n !== item;

    }))
  }

  
  return (
    <>
    <div className = "App">
      <Router>
      <Header  title="Todo" />
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Todos item={todos} addTodo={addTodo} setTodos = {setTodos} onDelete={onDelete} />
          </Route>
        </Switch>
      <Footer/> 
      </Router>
    </div>
    </>
  );
}

export default App;
