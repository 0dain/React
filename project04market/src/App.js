import './App.css';

import{Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Product from './components/Product';
import Products from './components/Products';
import Detail from './components/Detail';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
