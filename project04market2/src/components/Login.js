import React, { useEffect, useRef, useState }from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../components/auth/cookie";

const Login = () => {

    const [userData, setUserData] = useState({})
    
    const idRef = useRef()
    const pwRef = useRef()
    const nameRef = useRef()
    const selRef = useRef()

    const navigate = useNavigate();

    const btnCk =()=>{
        console.log('id :',idRef.current.value)
        console.log('pw :',pwRef.current.value)

        setUserData({
            'id' : idRef.current.value,
            'pw' : pwRef.current.value,
        })
    }
    const loginFunc = () =>{
        console.log("로그인실행")
        console.log("로그인실행2", JSON.stringify(userData))
        const url = "http://localhost:8888/boot/member/login";
        axios
        .post(url, JSON.stringify(userData), {
            headers: {
            "Content-Type": "application/json",
            },
        })
        .then((res, err) => {
            setCookie("x_auth", {
                user_id: res.data.user_id
            });
            console.log("x_auth" , getCookie("x_auth"));
            navigate("/");
        })
        .catch((err) => {
            console.log("Err");
        });


    }
    useEffect(()=>{
        console.log('현재 data',userData)
        // backend => 값을 보내줌 
        // userData.id !== undefined && alert(userData.id)

        if(Object.keys(userData).length !== 0 && userData.id !== '' && userData.pw !== ''){
            loginFunc();
            
            console.log("데이터",typeof(userData.id))
            setUserData({})
        }
        
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

        <button onClick={btnCk}>회원가입</button>

    </div>
  )
}

export default Login