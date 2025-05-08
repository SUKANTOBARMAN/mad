import React from 'react'
import './He.css'
import dark_arrow from '../../assets/dark-arrow.png'

const He = () => {
    return (
        <div className='container he'>
            <div className="he-text">
                <h1>We ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to to excel in the dynamic field of education</p>
                <button className='btn'>Explore me <img src={dark_arrow} alt="" />
                </button>
            </div>
        </div>
    )
}

export default He
