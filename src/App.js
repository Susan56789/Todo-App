import React,{ useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const [inputText,setInputText]=useState('');
  const[todos,setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Sue's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
