import React from 'react'

//하위 컨포넌트

   //rafce: 컴포넌트 구조를 만드는 단축키
    
    //컴포넌트: 리액트로 만들어진 앱을 이루는 최소 단위
    //         반복되는 코드를 하나로 묶어서 컨포넌트로 만듦
    //         내가 원하는 코드를 묶어서 '태그화' 시킨다

    //** 반드시, 대문자로 시작!=> 기존의 HTML 태그와 구분하기 위해~


    //프로퍼티(props): 상위 컨포넌트가 하위 컨포넌트의 값을 전달할 때 사용
    //상위 컨포넌트: <컨포넌트 이름 속성="값"/>
    //             단순 문자열? 값
    //             변수 사용? {변수 이름}
    //하위 컨포넌트의 매개변수로 값(Object)을 전달 받는다

    //Case 1. 매개변수 props => props.name
        //const Menu = (props) =>{
        //<h1>{props.name}</h1>
        //}

    //Case 2. 객체 안의 속성 => {name}
const Menu = ({name, price}) => {

  return (
    <div>
        <h1>{name}</h1>

        {/* 값이 들어있지 않은 경우는?!
            값 O => true
            값 X => false
            => 삼항 연산자 이용
        */}
        {/* price가 존재한다면 price를 적고 아니라면 3500원을 적어라 */}
        {price? <p>{price}</p>:<p>3500원</p>}
        
    </div>
  )
}

export default Menu