import React from 'react'

const PhotoCard = (props) => {

    const cardStyle = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContents:'center',
        border:'1px solid black',
        borderColor:'pink'
    }


    return (
        <div style={cardStyle}>
            {props.item.name}
            {props.item.url}
        </div>
    )
}

export default PhotoCard