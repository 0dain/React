import React, { useState } from 'react'
import CommentList from './CommentList';

const AddComment = () => {

  // let comm=<input type={text}></input>+<input type={submit}></input>
  const [String,setString]=useState('');
  
  const change=(e)=>{
    setString(e.target.value)
  }

  const changeClick=(e)=>{
    this.setState({
      CommentList: e.state.CommentList.concat([e.state.value]),
    })
  }

  return (
    <div>
      <form action='./CommentList'>
       <input type='text' value={String} onChange={change}></input>
       <input type='submit' onKeyPress={changeClick}></input>
      </form>
    </div>
  )
}

export default AddComment