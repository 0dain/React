import React from 'react'
import AddComment from './Ex06Com/AddComment'
import CommentList from './Ex06Com/CommentList'

const Ex06 = () => {

    //필수 구현
    //1. input창에 댓글을 입력하고 +버튼을 누르면 댓글 목록에 댓글 추가!
    // let comm=['테스트']
    // let newComm=comm.map(item=><AddComment key={item.name} item={item}></AddComment>);

    //선택 구현
    //2. 이때 현재 시각과 같이 출력할 것!
    //Ex. 여러분 안녕하세요~ - 오후 4:57:37

    //'concat' 이라는 기능 => 두 개의 배열을 합쳐주는 기능
    //배열 A, 배열B이 있을 때 합치는 방법 => let 배열 C=배열A.concat(배열B)
    //지금은 굳이 사용하지 않아도 됨!

    //3. 클릭말고 엔터를 쳐도 똑같이 댓글이 등록되도록 할 것!

    //이벤트
        //onClick={함수이름}: 클릭했을 때
        //onChange={함수이름}: 변화가 있을 때!
        //onKeyPress={함수이름}: 키보드 누를 때!
    //input 창에 변화 감지 => 댓글 등록 버튼 input 값 저장 => map 함수로 목록에 뿌려줄 것

    //실시간 시간
        //new Date().toLocaleTimeString()

  return (
    <div>
        <h1>Leave your comment!</h1>
        <AddComment/>
        <CommentList/>
    </div>
  )
}

export default Ex06