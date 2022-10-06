import './App.css';

import {Routes, Route} from 'react-router-dom';

import Main from './components/Main';
import About from './components/About';
import MyPage from './components/MyPage';
import Product from './components/Product';

function App() {
  return (
    <div>
     <h1>Welcome to React Router!</h1>
     
     {/* Routes: 여러 Route들을 감싸서 그 중 요청된 라우트 하나만 렌더링 해줌 
        Q. Switch?: Routes의 예전 방식!
     */}
     <Routes>
        {/* Route 필수 속성 2가지: path(경로), element(컴포넌트) */}
        {/* 사용자가 우리 주소 뒤에 아무것도 안 붙이고 들어오면 main페이지 보여줘 */}
        <Route path='/' element={<Main/>}></Route>
        {/* 사용자가 주소 뒤에 about을 적으면 about 페이지를 보여줘 */}
        <Route path='/about' element={<About/>}></Route>
        {/* a 태그는 외부링크로 이동할 때 사용, 내부에서 이동할 땐 사용하지 않음! */}
        
        {/* 로그인 상태에 따라 다르게 처리 */}
        <Route path='/mypage' element={<MyPage/>}></Route>

        {/* url 파라미터를 이용하는 useParams() */}
        {/* <Route path='/product' element={<Product/>}></Route> */}
        <Route path='/product:num' element={<Product/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
