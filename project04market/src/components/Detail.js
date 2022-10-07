import React from 'react'

import { useParams, useSearchParams } from 'react-router-dom'

const Detail = () => {

  //useParams() => 파라미터
    //Route path 값 수정
  let {num}=useParams()

  //useSearchParams() => 쿼리
    //url 값 수정
  const[query, setQuery]=useSearchParams()

  console.log(query.get('title'))//값을 잘 가지고 오는지 확인
  console.log(query.get('price'))//값을 잘 가지고 오는지 확인

  //장소까지 추가로 가져와서 h2 => 타이틀, p => 가격, p => 장소

  console.log(query.get('place'))//값을 잘 가지고 오는지 확인
  
  return (
    <div>
      <p>{num}번째 게시물</p>
      <h2>{query.get('title')}</h2>
      <p>가격: {query.get('price')}</p>
      <p>장소: {query.get('place')}</p>
      </div>
  )
}

export default Detail