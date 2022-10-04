import React, { useState } from 'react'

const AddComment = ({handleComment}) => {

  // let comm=<input type={text}></input>+<input type={submit}></input>
  // const [String,setString]=useState('');
  
  // const change=(e)=>{
  //   setString(e.target.value)
  // }

  // const changeClick=(e)=>{
  //   this.setState({
  //     CommentList: e.state.CommentList.concat([e.state.value]),
  //   })
  // }

  const[value, setValue]=useState('')

  //1. input 내 변화 값 감지
  const inputHandle=(e)=>{
    setValue(e.target.value)
  }

  //2. '+'클릭 시 input 값을 어딘가에 세팅
  const btnHandle=(e)=>{
    console.log('현재 댓글',value)

    //3. 세팅된 값을 상위 컴포넌트로 전송
    handleComment(value)

    //4. input 창을 비워줄 것
    setValue('')
  }

  const enterHandle=(e)=>{
    // console.log(e.code)
    //e.code가 enter라면 btnHandle()을 호출한다는 뜻
    e.code==='Enter'&&btnHandle()
  }

  return (
    <div>
      {/* <form action='./CommentList'>
       <input type='text' value={String} onChange={change}></input>
       <input type='submit' onKeyPress={changeClick}></input>
      </form> */}
      <input onChange={inputHandle} value={value} onKeyPress={enterHandle}></input>
      <button onClick={btnHandle}>+</button>
    </div>
  )
}

export default AddComment