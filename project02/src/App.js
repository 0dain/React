import './App.css';
import Menu from './Componesnts/Menu'
import Menu2 from './Componesnts/Menu2';
//import: 수입 Menu를 불러 올 것이다 from '경로';에서!

function App() {

  //상위 컴포넌트
  return (
    <div>
      <Menu name="민트초코" price="4500"></Menu>
      <Menu name="카페라떼" price="4500"></Menu>
      <Menu name="아메리카노"></Menu>
      {/* 변수명 사용 가능 */}
      <Menu name={blackTea} price="4300"></Menu>
    </div>
  );
}

export default App;
