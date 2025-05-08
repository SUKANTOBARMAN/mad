import React from 'react'
import './Camp.css'
import camp_1 from '../../assets/gallery-1.png'
import camp_2 from '../../assets/gallery-2.png'
import camp_3 from '../../assets/gallery-3.png'
import camp_4 from '../../assets/gallery-4.png'
import arrow_icon from '../../assets/white-arrow.png'

const Camp = () => {
    return (
        <div className='camp'>
            <div className="ca">
                <img src={camp_1} alt="" />
                <img src={camp_2} alt="" />
                <img src={camp_3} alt="" />
                <img src={camp_4} alt="" />
            </div>
            <button className='btn dark-btn'>See more here <img src={arrow_icon} alt="" /></button>
        </div>
    )
}

export default Camp
