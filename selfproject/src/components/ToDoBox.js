import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoBox = ({todoList}) => {

    // console.log("todoBox", todoList)


  return (
    <div>
      <h1>ToDo List</h1>
      {todoList.map((item)=><ToDoItem item={item}/>)}
    </div>
  )
}

export default ToDoBox
