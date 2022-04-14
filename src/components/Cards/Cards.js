import React from 'react'
import './Cards.css'

function Cards({title, imageUrl, content}) {
    return (
        <div className='card'>
            <div className='image'>
                <img src={imageUrl} alt=''/>
            </div>
            <div className='title'>
                <h2>{title}</h2>
            </div>
            <div className='content'>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Cards
