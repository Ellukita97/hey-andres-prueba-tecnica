import React from 'react'
import './Loading.css'
import loadImage from '../asset/load.webp'

function LoadingComponent() {
    return (
        <div className='loadingContainer'>
            <img src={loadImage} loading='lazy' />
        </div>
    )
}

export default LoadingComponent