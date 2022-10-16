import React,{useRef} from 'react'

const Ex06B = () => {

    //리액트 훅
    //useRef: 리액트에서 DOM을 선택해야 할 때
        //JS의 document.getElementByID(), document.querySelector() 등
        //DOM에 접근해야 하는 함수를 대체하는 리액트 훅
   
    const comRef=useRef();

    const btnCK=()=>{
        // console.log('댓글', comRef.current); 댓글 <input type=​"text">​으로 출력 댓글 내용을 가져오고 싶다면?!
        console.log('댓글', comRef.current.value);//댓글 123
    }

  return (
    <div>
        <input type="text" ref={comRef}></input>
        <button onClick={btnCK}>➕</button>
    </div>
  )
}

export default Ex06B