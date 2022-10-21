import './App.css';

import {Routes,Route} from 'react-router-dom'

import Header from './components/Header';
import Products from './components/Products';
import Detail from './components/Detail';
import Join from './components/Join';
import Login from './components/Login';

function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/detail:num' element={<Detail/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
  );
}

export default App;
