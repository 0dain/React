import './App.css';

import {useEffect, useState} from 'react'
import axios from 'axios'
import NewsItem from './components/NewsItem';

function App() {

  //Axios: 비동기 통신 라이브러리
    //(1) 설치: npm i axios
    //(2) import axios from axios
    //(3) axios로 데이터 조회하기(받아오기)
      //비동기적으로 데이터 요청
      // axios.get(url): get방식으로 url에 있는 데이터를 요청하겠다
        // .then(()=>{}): 그리고 나서 데이터를 성공적으로 가지고 왔다면 then 안에 있는 함수 실행
          //.catch(()=>{}): 근데 데이터를 가지고 오지 못했다면 catch 안에 있는 함수 실행
            //.then(()=>{}): 성공하든 실패하든 항상 실행해야 할 때는 한 번 더 .then 사용
    
  //(4) axios로 데이터 전송하기(백으로)
    //axios: 비동기적으로 데이터 전송
      //.post(url,{보낼 데이터(객체의 형태로)}): 전송할 데이터 url
        //.then(()=>{})
          //.catch(()=>{})
  
  //뉴스 오픈 API
  let url='https://newsapi.org/v2/top-headlines?country=kr&apiKey=fa8d9d2a4b2a41b6805c902f4a3d8929'

  //뉴스를 불러와서 담을 변수
    //화면에 보여주려면 단순 변수인 let을 쓰면 콘솔창에서만 뜨고 화면엔 적용X
      //화면에 나오는 건 useState를 사용해야 함!
  const [news, setNews] = useState([])

  const getNews=()=>{
    axios.get(url).then((res)=>{console.log(res); setNews(res.data.articles)}).catch(()=>{alert('💥error!💥')})
    //res: 받아올 데이터를 매개변수 res에 저장
  }
  //화면 렌더링이 끝나면 실행
  useEffect(()=>{
    getNews()
  },[])

  return (
    <div>
      {news.map((item, idx)=>(<NewsItem key={idx+item.title} news={item} idx={idx}></NewsItem>))}
    </div>
  );
}

export default App;
