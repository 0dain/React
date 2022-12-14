import React, { useEffect, useRef, useState }from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Join = () => {

    const [userData, setUserData] = useState({})
    
    const idRef = useRef()
    const pwRef = useRef()
    const nameRef = useRef()
    const selRef = useRef()

    const navigate = useNavigate();

    const btnCk = async()=>{
        console.log('id :',idRef.current.value)
        console.log('pw :',pwRef.current.value)
        console.log('name :',nameRef.current.value)
        console.log('selected :',selRef.current.value)

        setUserData({
            'id' : idRef.current.value,
            'pw' : pwRef.current.value,
            'name' : nameRef.current.value,
            'season' : selRef.current.value
        })
   
        //npm install axios
        //axios.js 만들기


        const result = await fetch("http://localhost:8888/boot/member/join", {
            method: "POST", // *GET, POST, PUT, DELETE 등
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin
            body: JSON.stringify(userData),
            });
            let resultText = await result.text();
            console.log(resultText);
            if (resultText === "success") {
                //npm install react-router-dom
                navigate("/login");
            } else if (resultText === "fail") {
            console.log("회원가입 실패 처리하기");
            }
    }

    useEffect(()=>{
        console.log('현재 data',userData)
        // backend => 값을 보내줌 
        // userData.id !== undefined && alert(userData.id)
    },[userData])
  return (
    <div>
        ID : <input
        type="text"
        placeholder='ID를 입력하시오'
        ref={idRef}
        ></input>

        <button>아이디 중복확인</button>

        <br></br>
        PW : <input
        type="password"
        placeholder='PW를 입력하시오'
        ref={pwRef}></input>

        <br></br>
        이름 : <input
        type="text"
        placeholder='이름을 입력하시오'
        ref={nameRef}></input>
        <br></br>
        
        좋아하는 계절 : 
        <select ref={selRef}>
            <option>봄</option>
            <option>여름</option>
            <option>가을</option>
            <option>겨울</option>
        </select>
        <br></br>

        <button onClick={btnCk}>회원가입</button>

    </div>
  )
}

export default Join