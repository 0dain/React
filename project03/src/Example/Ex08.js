import React, { useEffect, useState } from 'react'

const Ex08 = () => {

    //a. constructor 대체
        //변수 초기화, state 관리
    console.log('a 함수 초기화')

    const[num, setNum]=useState(0)

    const btnPlus=()=>{
        // setNum=num+1
        setNum(num+1)
    }

    //c. 화면 mount
    //useEffect(()=>{}(함수),[](배열))
        //API Call(API: 프론트엔드와 백엔드가 주고 받는 모든 데이터를 가지고 있는 것)
    useEffect(()=>{
        //이 안에 API Call
        console.log('c. Mount')
    },[])

    //d. 값 update
    //useEffect(()=>{},[변화를 감지할 대상])
        //변화를 감지하는 대상은 복수가 될 수도 있음
    useEffect(()=>{
        console.log('update!')
    },[num])

  return (
    <div>
        {/* b. render를 대체
            화면 구성 요소 작성 
            중괄호도 요소로 보기 때문에 큰 태그 안에 넣어줘야 함*/}
        {console.log('b. rendering')}
        <p>{num}</p>
        <button onClick={btnPlus}>+1</button>
    </div>
  )
}

export default Ex08