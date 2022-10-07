import React from 'react';

//데이터가 들어있는 json파일 가져오기
import sell from '../json/sell.json';

import Product from './Product';

const Products = () => {

  console.log(sell)
  console.log(sell.list)

  //map함수 
    //sell.list.map(()=>())
  let list=sell.list.map((item, idx)=>(
  <Product key={idx+item.title} item={item} idx={idx}></Product>
  //item={item} idx={idx} 이걸 왜 넣을까!? => Product에 item과 idx번호를 넘겨주기 위해~
    //안 써도 됨 Product에 props로 받아주면 됨!
  ));

  //css 기능
   //flex-wrap: wrap;
     //크기가 넘어가는 데이터들은 다음 줄로 넘겨줌

  return (
    <div>
      {list}
    </div>
  )
}

export default Products