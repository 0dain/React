import React from 'react';

const Box = ({name, num}) => {
    //괄호 안에 props를 써도 됨
    //props: 컴포넌트한테 다이나믹한 값을 주고 싶을 때 사용

    const clickMe=()=>{
        alert('리액트 강의 수강~');
    }

    return (
        <div  className="box">
            Box{num}
            {/* 매개변수를 받아 오지 않고 props로 받아 올 때: {props.num} */}
            {name}
            {/* {props.name} */}
            <button onClick={clickMe}>클릭</button>
        </div>
    );
};

export default Box;