import React from 'react'
import PhotoCard from './Ex05Com/PhoatoCard'
import pee from './img/까꿍.jpg'
import bam from './img/군밤.jpg'
import woo from './img/차.jpg'

const Ex05 = () => {

    //조건1) Ex05Com 폴더 만들어서 PhotoCard.js 컴포넌트 사용!
    //조건2) member라는 배열안에 name과 url 주소가 포함된 객체 생성
    //조건3) 만약 배열의 값을 추가하면 바로 새로운 카드들이 생기게 할 것!
    let member=[{name:'까꿍이', url:<img width='200px' src={pee}></img>},{name:'군밤이',url:<img width='200px' src={bam}></img>},{name:'은우',url:<img width='200px' src={woo}></img>}]
    // let member=[{name:'까꿍이', url:{pee}},{name:'군밤이',url:{bam}},{name:'은우',url:{woo}}]

    let memberCard=member.map(item=>(<PhotoCard key={item.name} item={item}></PhotoCard>));
   
    // 다 한 후 디자인 진행~


    let container={
        display:'flex',
        flexDirection:'row',
   
    }

  return (
    <div style={container}>
        {memberCard}
    </div>
  )
}

export default Ex05