import React from 'react'
import img from '../image.jpg'
export default function Header() {
    return (
        <div className="header">
            <img src={img} alt="Avatar" className="avatar" />
            <h1>Open source</h1>
            <h2>A timeline that shows open source contributions all the way to present day.</h2>
        </div>
    )
}
