import React, { useState } from 'react'
import AddComment from './AddComment';

const CommentList = () => {

  const [commentArr, setCommentArr]=useState(['']);

  const onSubmit=(e)=>{
    // e.prevernDefault();
    // comment === ''? '':0;
    // setCommentArr(commentValueList=>[commentArr, commentValueList]);
    commentArr.map(item=><AddComment key={item}></AddComment>);
    // setCommentArr(''`);
  }
  console.log(commentArr)

  return (
    <div onSubmit={onSubmit}></div>
    // <></>
  )
}

export default CommentList