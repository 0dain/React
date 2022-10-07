import React from 'react'
import{Link, useNavigate} from 'react-router-dom'

const Header = () => {

  const navigate=useNavigate();

  // const goToMain=()=>{
  //   navigate('/');
  // }

  const linkStyle={
    textDecoration: 'none', //링크 밑에 밑줄 안 보이게 설정하는 거
    color: 'rgb(243, 159, 50)',
    textAlign: 'center'
  }

  return (
    <div>
       {/* <h1 onClick={goToMain}>Campus K Market</h1> */}
       <Link to='./' style={linkStyle}><h1>와르르마켓</h1></Link>
    </div>
  )
}

export default Header