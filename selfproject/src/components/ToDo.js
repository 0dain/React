import React, {useState}from 'react'
import ToDoBox from './ToDoBox'

const ToDo = () => {

    //1. input창이 있고 button이 있다
    //2. input창에 값을 입력하고 button을 누르면 아이템이 추가된다
    //3. 삭제버튼을 누르면 삭제가 가능하다

    const[inputValue, setInputValue]=useState('')
    const[todoList, setTodoList]=useState([])

    const addItem=()=>{
        console.log("im hereererererer!", inputValue)
        setTodoList([...todoList, inputValue])
    }


  return (
    <div>
      <input value={inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}></input>
      <button onClick={addItem}>추가</button>
      <ToDoBox todoList={todoList}/>
    </div>
  )
}

export default ToDo
