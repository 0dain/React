import React from 'react'

const ToDoItem = ({item}) => {


    const deleteToDo=(e)=>{
      console.log(e.target.value)
       const del=e.target.parentNode
       del.remove()
    }

  return (
    <div className='todoitem'>
      {item}
      <button onClick={deleteToDo}>삭제</button>
    </div>
  )
}

export default ToDoItem
