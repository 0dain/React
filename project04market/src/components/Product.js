import React from 'react'

const Product = (props) => {


  return (
    <div>
        <img src={props.item.photo} width='300px'></img><br/>
        {props.item.title}<br/>
        {props.item.price}<br/>
        {props.item.place}
    </div>
  )
}

export default Product