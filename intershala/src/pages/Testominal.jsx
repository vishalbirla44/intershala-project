import React from 'react'
import './Testomonial.css'
import testomonialImg from '../asest/testomonial.png'
import banner  from '../asest/banner.png'

const Testominal = () => {
    return (
        <div className='testomonial'>
            <div className='t-top'>
                <img src={testomonialImg} alt="" />
            </div>

            <div className='t-bottom'>
            <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default Testominal