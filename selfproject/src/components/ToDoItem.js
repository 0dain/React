import React from 'react'

const ToDoItem = ({item}) => {


    // const deleteToDo=(e)=>{
    //     e.target.value
    // }

  return (
    <div className='todoitem'>
      {item}
      <button>삭제</button>
    </div>
  )
}

export default ToDoItem
