import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBoard from './components/TodoBoard';
import TodoItem from './components/TodoItem';



function App() {

  const [inputValue, setInputValue]=useState("What needs to be done?");
  const [todoList, setTodoList]=useState([])
  const addItem =() =>{
    console.log("here",inputValue)
    setTodoList([...todoList,inputValue]) // 기존에 아이템은 유지하데 새로운거를 넣어주세여
  }
  return (
    <main>
      <input value={inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>
       <TodoBoard todoList={todoList}/>{/*app에서 쓰고 있는것을 TodoBoard에 전달해줘야함 */}
       <button>✖</button>
      
    </main>
  );
}

export default App;
