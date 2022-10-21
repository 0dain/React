import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {

    const linkStyle = {
        textDecoration : 'none',
        color : 'green'
    }
  return (
    <div>
        <Link to='./' style={linkStyle}>
            Campus K Market
        </Link>

        <Link to='./join'>회원가입</Link>
        <Link to='./login'>로그인</Link>
    </div>
  )
}

export default Header