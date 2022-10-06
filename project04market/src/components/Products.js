import React from 'react';

//데이터가 들어있는 json파일 가져오기
import sell from '../json/sell.json';
import Product from './Product';

const Products = () => {

    sell.list.map=((item)=>(item));
    
  return (
    <div>Products</div>
  )
}

export default Products