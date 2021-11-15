import React,{ useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  //input text
  const [inputText,setInputText]=useState('');

  //todo list
  const[todos , setTodos] = useState([]);

  //select filter state
  const [status, setStatus] =useState('all');

//filtered 
const [filteredTodos, setFilteredTodos] = useState([]);


//function
const filterHandler = () =>{
  switch (status){
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }

}


//save to local
const saveLocalTodos = () =>{
  if (localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else{
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

const getLocalTodos = () =>{
  if (localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  }else{
   let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
  }
}

//use effect
useEffect(() =>{
  filterHandler();
  saveLocalTodos();
  },[todos, status]); // function will run when (status or todos changes)
  
//run once when the app start
useEffect(()=>{
  getLocalTodos();
},[])

  return (
    <div className="App">
      <header>
        <h1>Sue's Todo List</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      setStatus={setStatus}
      filteredTodos={filteredTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
