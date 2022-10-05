import React, { useEffect, useState } from 'react'
import axios from 'axios'

    //Q1. 영화 데이터를 테이블 형태로 랜더링
    //랭킹 - 영화제목 - 개봉일자
    //React JSX 특징: <table>을 <th>,<td>없이 사용 불가
        //<table>
            //<tbody>
                //<tr>td*3</tr>
            //</tbody>
        //</table>

const Ex09 = () => {

    const [data, setData] = useState([])

    //1. 버튼 만들 때 사용
    let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

    //2. 버튼을 눌렀을 때, 이벤트 처리된 값을 getData 매개 변수 안에 넣어서 호출
    //value={내가 원하는 값} e.target.value를 하면 원하는 값을 가져올 수 있음

    // const btnMon = (e) => {
    //     mon=e.target.value
    //     let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=2022'+{mon}+'01'
    // }

    const btnMon=(e)=>{
        console.log(e.target.value)
        getData(e.target.value)
    }

    //3. 아무것도 안 누른 화면 첫 렌더링: 오늘 날짜의 데이터
    //버튼을 누르면 해당 월의 1일 데이터로 변경
    const getData = (selectMonth) => {
        console.log('원하는 달', selectMonth)
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=2022${selectMonth}01`

        //나한테 필요한 정보
        //영화 순위가 모여있는 배열: data
        //영화 이름: movieNm / 개봉일자: openDt / 랭킹: rank

        // axios.get(url).then((매개변수)=>{}).catch(()=>{}) 조건문같은 기능 then(if), catch(else)
        axios.get(url).then((res) => { setData(res.data.boxOfficeResult.dailyBoxOfficeList) }).catch(() => { alert('error!') })
        console.log(data)
    }



    //c. Mount 작업해주기
    useEffect(() => {
        //현재 날짜 => 몇 월
        let todayMonth=new Date().getMonth()+1

        getData(todayMonth)
    }, [])

    // let dateArr=data.map(item=>(<p>{setData[0].rank}</p>))

    return (
        <div>
            <h1>2022년 올해의 영화</h1>
            <p>매달 1일 순위를 보여드립니다!</p>

            {month.map((item) => (<button onClick={btnMon} value={item} key={item}>{item}월</button>))}
            <table>
                <tbody>
                    {/* 여기서부터 반복 시작, 리액트는 for문 안 씀 */}
                    {data.map((item) => (<tr key={item.rank}><td>{item.rank}</td><td>{item.movieNm}</td><td>{item.openDt}</td></tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Ex09