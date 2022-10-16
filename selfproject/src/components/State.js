import React, {useState} from 'react'

const State = () => {

    let count=0;//리액트에서는 변수로는 ui업데이트가 안 됨!

    //State로 ui업데이트~!
    // const [count2(초기값을 담고 있는 변수), setCount2(변수의 값을 업데이트 해주는 set함수)]=useState(초기값)
        //비동기적! => ui에 찍히는 값과 콘솔에 찍히는 값이 다르다!(콘솔이 한발짝씩 느림)
    const [count2, setCount2]=useState(0)

    const increagse=()=>{
        count+=1
        
        //State는 변수 다루듯이 하면 안 됨!!
        //count2+=1 => 값 변동 X
        //setCount2 이용하기
        setCount2(count2+1)

        console.log("count work?",count, "state count2", count2)
        //state의 값이 업데이트가 되면 변수의 값은 다시 초기화가 됨
    }

  return (
    <div>
      <main>
        {/* 리액트에서 자바스크립트 개념을 html안에 쓸 때는 {}를 써야 함 */}
        <div>{count}</div>
        <div>state:{count2}</div>
      <button onClick={increagse}>증가</button>
      </main>
    </div>
  )
}

export default State
