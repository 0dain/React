//함수형 컴포넌트 구조: rafce
//클래스형 컴포넌트 구조: rcc

//rcc로 만든 페이지
import React, { Component } from 'react'

export default class Ex07 extends Component {

    //1. Class Component에서 state 관리
        //생성자: constructor
        //super: 부모클래스를 생성한다!
        //얘네는 세트임~ 항상 같이 !
            // constructor(props){
            //     super(props)
            // }

    //LifeCycle 어플리케이션의 생애주기
    //a -> b -> c -> d

    //a. constructor 최초 생성
        //state관리, 변수선언, 데이터 관리
    constructor(props){
        super(props)
        console.log('a. constructor')
        this.state={
            num:0
        }
    }

    //2. 함수는 선언없이 사용
    ck=()=>{
        console.log('ck')
        this.setState({
            num: this.state.num+1
        })
    }

    //b. render 화면을 렌더링 할 때
        //화면을 구성하는 요소 입력
  render() {
    console.log('b. render')
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.ck}>+1</button>
      </div>
    )
  }

  //c. componentDidMount 화면 마운트됨!
       //API Call
  componentDidMount(){
    console.log('c. componentDidMount')
  }

  //d. componentDidUpdate 값이 변경되어 갱신이 일어난 직후 호출
  componentDidUpdate(){
    //만약에 값이 바뀐다면 실행해야 할 것들을 적어줌
    console.log('update!')
    
  }
}
