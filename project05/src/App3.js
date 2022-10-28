import React,{useRef} from 'react'

const App3 = () => {

    // useRef => 해당하는 요소의 값을 가져오고 싶을 때 사용
    const idRef=useRef()
    const checkBoxRef=useRef()
    const selectRef=useRef()
    
    const handleSubmit=(event)=>{
        // 제출 이벤트를 잡아야 함
        event.preventDefault()//제출 이벤트 잡는다!
        //form태그가 다른 페이지로 정보를 이동시키지 못하도록 막아주는 것!
        //전송되는 값을 가공하고 싶을 때 사용

        //(1) input text를 사용한 useRef
        //사용자가 입력한 이름 값을 받아 오고 싶다!

        console.log("제출완료")//순식간에 콘솔창에서 사라짐 => 새로고침이 되어서
        console.log("제출완료",idRef.current.value)//id 인풋에 입력한 현재 값!

        //비동기 통신으로 데이터 주고 받기
        // axios.post('/url',{데이터}) => 나는 비동기 통신으로 데이터를 보내줄 거야 어떤 데이터? {} 여기 안에 넣은 데이터!
        // axios.post('/url',{데이터}).then(()=>{
        //     //데이터를 성공적으로 가져왔다면
        //     //navigate => 페이지 이동!
        //     //여기서 페이지 이동 구현 가능
        // }).catch(()=>{})

        //(2) input radio, checkbox를 사용한 useRef
        //카테고리 정렬할 때
        console.log(checkBoxRef)//checkBoxRef에 뭐가 들어 있나?!
        console.log(checkBoxRef.current.value)
        console.log(checkBoxRef.current.checked)//체크를 했는지 안 했는지

        //checkbox, radio 같은 경우 => 
        //무슨 내용을 넘겼는지 알고 싶으면 value
        //체크 여부를 알고 싶으면 .checked(투두리스트 완료 상태 할 때 css로 true라면 어떻게 하겠다 false라면 어떻게 하겠다 할 때 사용)
   
        // (3) select 태그를 사용한 useRef => 이메일 값을 받을 때 옆에 어떤 이메일 쓰는지 선택 하는 창이 select 임!
        //가격순 정렬
        console.log("select :", selectRef)
        console.log("select :", selectRef.current.value)
   
    }



  return (
    <div>
        {/*onSubmit: 누군가가 제출했을 때 */}
        <form onSubmit={handleSubmit}>
            이름: <input type='text' name='userName' ref={idRef}/><br/>
            희망 근무지: 
            광주<input type='checkbox' name='ps' value='gj' ref={checkBoxRef}/>
            서울<input type='checkbox' name='ps' value='sl'/>
            판교<input type='checkbox' name='ps' value='pg'/><br/>

            <select ref={selectRef}>
                <option value='new'>새해</option>
                <option value='hw'>할로윈</option>
                <option value='xmas'>크리스마스</option>
            </select><br/>
            <input type='submit'/>
        </form>

    </div>
  )
}

export default App3