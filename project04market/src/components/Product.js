import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({item, idx}) => {

  console.log(item, idx)//Products에서 받아오는 item과 idx가 잘 넘어오는지 확인

  const containerStyle={
    border: '1px solid gray',
    display: 'flex', //세로로 나열 말고 가로로 나열
    flexDirection: 'column' //방향 설정
  }

  const linkStyle={
    textDecoration: 'none', //링크 밑에 밑줄 안 보이게 설정하는 거
  }



  return (
    <div style={containerStyle}>
        <img src={item.photo} width='250px'></img>
        <h2>
          <Link to={'/detail'+idx+'?title='+item.title+'&price='+item.price+'&place='+item.place} style={linkStyle}>
            {/* idx 번호와 쿼리들을 넣어주기 위해 중괄호{} 사용한 것! */}
            {item.title}
          </Link>
        </h2>
        <p>{item.price}</p>
        <p>{item.place}</p>
    </div>
  )
}

export default Product