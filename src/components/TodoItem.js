import React from 'react'
import TodoBoard from './TodoBoard'

function TodoItem(props){
    return(
        <div className='todo-item'>
            {props.item}
        </div>
    )
}
// {props.todoLIst.map((item)=><TodoItem item={item}/>)} 여기서 가져와서 props
export default TodoItem