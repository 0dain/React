import React from 'react'
import { useState } from 'react';

const Ex03 = () => {

    const [rdNum, setRdNum] = useState(0);
    const [inputNum, setInputNum] = useState(0);

    //1. 랜덤한 수를 뽑기!
    //  범위 1~3(*3+1)

    // setRdNum=Math.floor(Math.random()*3+1);

    const [answer, setAnswer] = useState('');

    //2. 누른 버튼의 숫자를 랜덤한 수와 비교
    //     => 함수를 따로 만드는 것을 추천!
    
    //3. 만약, 랜덤한 수와 누른 버튼의 수가 같다면 '정답입니다' 출력 다르다면 '땡!' 을 출력
    
    const check = (event) => {
        setInputNum(parseInt(event.target.innerText));
        // parseInt(event.target.innerText)==Math.floor(Math.random()*3+1)?setAnswer('정답입니다'):setAnswer('땡!')
        setRdNum(parseInt(Math.random()*3+1));
    }


    return (
        <div>
            <div>
                <button onClick={check}>1</button>
                <button onClick={check}>2</button>
                <button onClick={check}>3</button>
            </div>

            <div>
                <br/>
               내가 입력한 숫자: {inputNum}<br/>
               {/* 결과: {answer}<br/> */}
               랜덤한 숫자:{rdNum}<br/>
               {inputNum==rdNum? <p>정답입니다</p>:<p>땡!</p>}
            </div>
        </div>
    )
}

export default Ex03