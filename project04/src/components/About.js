import React from 'react';

import { useNavigate } from 'react-router-dom';

const About = () => {

    //useNavigate: 페이지 이동을 도와주는 React hooks
    const navigate=useNavigate();

    const goToMain=()=>{
        navigate('/');
    }

  return (
    <div>About
        <br/>
        <button onClick={goToMain}>Main으로 이동</button>
    </div>
  )
}

export default About