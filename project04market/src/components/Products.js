import React from 'react';

//데이터가 들어있는 json파일 가져오기
import sell from '../json/sell.json';

import Product from './Product';

const Products = () => {

  let list=sell.list.map((item, idx)=>(<Product key={item+idx} item={item} idx={idx}></Product>));
    
  return (
    <div>{list}</div>
  )
}

export default Products