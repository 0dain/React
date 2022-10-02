import React from 'react'


//매개변수로 Object를 적을 때 주의!
//1) ({속성이름}) => 중괄호 생략 금지!
//2) 다중 속성을 가져올 때 => ({속성},{속성]}) 금지!!!!!
//                       => ({속성, 속성}) => 하나의 객체 안에 다중 속성!!

const style={
    width: '200px',
    fontSize: '20px',
    backgroundColor:  '#fbf861',
    textAlign: 'center'
}

function Member({team, name}) {
  


  return (
    <div style={style}>
         
        {team}<br></br>
        {name}
        <hr color='pink'></hr> 
              
    </div>
  )
}

export default Member
