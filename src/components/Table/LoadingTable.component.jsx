import React from 'react'
import './Loading.css'
import loadImage from '../../components/asset/load.webp'

function LoadingTableComponent() {
    return (
        <div className='loadingContainer'>
            <img src={loadImage} loading='lazy' />
        </div>
    )
}

export default LoadingTableComponent