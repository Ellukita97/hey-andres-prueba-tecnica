import React from 'react'
import './Squere.style.css'

function SquereComponent({ title, text }) {
    return (
        <div className='squere'>
            <h4>{title}</h4>
            {text}
        </div>
    )
}

export default SquereComponent