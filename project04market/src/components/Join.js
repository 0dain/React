import React,{useRef, useState, useEffect} from 'react'

const Join = () => {

    const[userData, setUserData]=useState({});

    const idRef=useRef();//idRef는 useRef기능을 하게 됨
    const pwRef=useRef();
    const nameRef=useRef();
    const selRef=useRef();

    const btnCk=()=>{
        console.log(`id: ${idRef.current.value}`);
        console.log(`pw: ${pwRef.current.value}`);
        console.log(`이름: ${nameRef.current.value}`);
        console.log(`좋아하는 계절: ${selRef.current.value}`);
        setUserData({'id': idRef.current.value,
          'pw':pwRef.current.value,
          'name':nameRef.current.value,
          'sel':selRef.current.value});
        // alert(`${selRef.current.value}(을)를 좋아하는 ${nameRef.current.value}님 환영합니다 `);

        // alert(`${userData.sel}을(를) 좋아하는 ${userData.name}님 환영합니다`)

    }

    useEffect(()=>{
      //객체, 배열을 불러올 땐 ``으로 불러오면 가끔 문자열로 변형되어서 값이 가져와지지 않음 그러니 그냥 , 로 쓰자~
      console.log('현재 데이터:',userData)
      //백엔드로 값을 보내줌
      // userData.id  !== undefined&&alert(userData.id);
    },[userData])

  return (
    <div>
        아이디: <input type="text" placeholder='ID를 입력하시오' ref={idRef}></input>
        <button>아이디 중복 확인</button><br/>
        비밀번호: <input type="password" placeholder='PW를 입력하시오' ref={pwRef}></input><br/>
        이름: <input type="text" placeholder='이름을 입력하시오' ref={nameRef}></input><br/>
        좋아하는 계절: 
          <select ref={selRef}>
              <option>봄</option>
              <option>여름</option>
              <option>가을</option>
              <option>겨울</option>
          </select><br/>
          <button onClick={btnCk}>회원가입</button>
    </div>
  )
}

export default Join