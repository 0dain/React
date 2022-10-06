import React from 'react'
import{Link, useNavigate} from 'react-router-dom'

const Header = () => {

  const navigate=useNavigate();

  const goToMain=()=>{
    navigate('/');
  }

  return (
    <div>
       <h1 onClick={goToMain}>Campus K Market</h1>
    </div>
  )
}

export default Header