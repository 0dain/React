import React, { useState } from 'react'

const CommentList = ({com}) => { //내가 받아올 com을 적어줌

  console.log('현재 댓글 상태', com)

  // const [commentArr, setCommentArr]=useState(['']);

  // const onSubmit=(e)=>{
  //   // e.prevernDefault();
  //   // comment === ''? '':0;
  //   // setCommentArr(commentValueList=>[commentArr, commentValueList]);
  //   commentArr.map(item=><AddComment key={item}></AddComment>);
  //   // setCommentArr(''`);
  // }
  // console.log(commentArr)
  const fontStyle={
    fontSize: '10px',
    Color: 'gray'
  }

  return (
    // <div onSubmit={onSubmit}></div>
    <div>
      {com.map((item,idx)=>(<p key={idx+item.text}>{item.text} <span style={fontStyle}>{item.time}</span></p>))}
    </div>
  )
}

export default CommentList