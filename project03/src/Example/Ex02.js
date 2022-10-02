import React from 'react'
import junPic from './img/pic2.jpg'

//import 해줘야함 꼮꼭!
import { useState } from 'react'

const Ex02 = () => {
    // 1. '좋아요' 버튼 클릭 시, 버튼의 내용이 '좋아요 취소'로 변경
    //     '좋아요 취소' 버튼 클릭 시, 버튼의 내용이 '좋아요'로 변경
    // 2. '좋아요' 버튼 클릭 시, 하얀 하트 노란 하트로 변경
    //    '좋아요 취소' 버튼 클릭 시, 다시 하얀 하트로 변경
    const [string, setString] = useState("좋아요");
    const [like, setLike] = useState('🤍');

    const ck = () => {
        // if (string == '좋아요') {
        //     setString('좋아요 취소');
        //     setLike('💛');
        // } else {
        //     setString('좋아요');
        //     setLike('🤍');
        // }

        //삼항 연산자도 가능
        string=='좋아요'? setString('좋아요 취소'): setString('좋아요');
        like=='🤍'? setLike('💛'):setLike('🤍');
    }

    // const ck=(event)=>{
    //     if(event.target.innerText=='좋아요 취소'){
    //         event.target.innerText='좋아요';
    //         setLike('🤍')
    //     }else{
    //         event.target.innerText='좋아요 취소'
    //         setLike('💛')
    //     }
    // }


    // 3. '+1' 버튼 클릭 시, 숫자가 1씩 증가
    const [num, setNum] = useState(0);

    const ckPlus = () => {
        setNum(num + 1);

    }

    // 4. '-1' 버튼 클릭 시, 숫자 -씩 감소
    //         단, 0 밑으로는 내려가지 않도록!
    const ckMinus = () => {

        // if (num > 0) {
        //     setNum(num - 1)
        // }

        //&& 연산자 사용 가능
        num>0&& setNum(num - 1);
    }

    //완료 시, 노란 하트로 좋아요 5개 만들어서 캡처 후 슬랙에 올리기

    return (
        <div>
            {/* 이미지, 좋아요 버튼, +1버튼, -1버튼 */}
            {/* <img width="300px" src="https://cdn.daily.hankooki.com/news/photo/202203/801887_1075533_1023.jpg" /> */}
            <img width="300px" src={junPic}/>
            <br />
            <p>{like} {num}</p>
            <button onClick={ck}>좋아요</button>
            <button onClick={ckPlus}>+1</button>
            <button onClick={ckMinus}>-1</button>
        </div>
    )
}

export default Ex02