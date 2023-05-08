import React from 'react'
import TodoItem from "./TodoItem"
import Clear from "./Clear"

function TodoBoard(props){  //얘를 수출 시켜야 쓴다
    return (
        <div>
            <h1>List</h1>
           {props.todoList.map((item)=><TodoItem item={item}/>)}   {/* 내려 받아온 useState의 todoLIst / array에 있는 내용을 보여주고 싶을 때 map사용 */}
           {props.todoList.map((el)=><Clear el={el}/>)}  {/* x랑 붙어서 우케함?? */}
        
        </div>
    )
}
export default TodoBoard