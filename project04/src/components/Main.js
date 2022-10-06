import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Main = () => {

    const navigate=useNavigate();

    const[userState,setUserState]=useState(true);//로그인 상태 확인, 지금은 DB연결을 안 했으니까 임의로 지정

    const goToMyPage=()=>{
        //로그인 상태면 마이페이지로 이동, 그렇지 않으면 about으로 이동

        userState==true? navigate('/mypage'):navigate('/about')
    }

  return (
    <div>Main
        <br/>
        {/* Link Component : 브라우저 주소를 바꿔주는 역할 
        실제로 페이지를 불러오지는 않는다(a태그와의 차이점)*/}

        <Link to='./about'>About으로 이동</Link>
        {/* <Link to='./about'>About으로 이동</Link> 
                . => 현재를 기반으로 해서 /about으로 이동할 거다!
        */}
        <br/>
        <Link to='./product50'>상품페이지로 이동</Link><br/>

        <button onClick={goToMyPage}>마이페이지로 이동</button>
    </div>
  )
}

export default Main