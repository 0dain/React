import './App.css';
import Box from './components/Box';
import State from './components/State';
import ToDo from './components/ToDo';

function App() {
  return (
    <div>
      {/* 컴포넌트, props 개념 */}
      {/* <Box name='코알누' num='1'/>
      <Box name='준호' num='2'/>
      <Box name='유진' num='3'/>
      <Box name='민니' num='4'/> */}
      
      {/* State 개념 */}
      {/* <State/> */}

      {/* 투두 리스트 만들기~ */}
      <ToDo/>

    </div>
  );
}

export default App;
