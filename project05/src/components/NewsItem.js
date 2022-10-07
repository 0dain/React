import React from 'react'

const NewsItem = ({news, idx}) => {

    console.log(news)

    const textStyle={
        display: 'flex',
        flexDirection: 'row', 
        margin: '10px'
    }

  return (
    <div style={textStyle}>
        <img src={news.urlToImage} width='300px'></img>
        <div>
        <a href={news.url}><h2>{news.title}</h2></a>
        <p>{news.description}</p>
        </div>
    </div>
  )
}

export default NewsItem