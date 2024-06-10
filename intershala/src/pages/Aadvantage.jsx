import React from 'react'
import './Aadvantage.css'
import AddvanageTop from '../asest/advantage.png'
import AddvantageTopRight from '../asest/aadvantagebg.png'
import AddvantageBotto from '../asest/addvantageBottom.png'
import AddvantageBottomRight from '../asest/addvantageBottomRight.png'
const Aadvantage = () => {
  return (
    <div className='aadvantage'>
        <div className='ad-top'>
            <div className='top-left'>
                <img src={AddvanageTop} alt="" />
            </div>
            <div className='top-right'>
                <img src={AddvantageTopRight} alt="" />
            </div>
        </div>

        <div className='ad-bottom'>
            <div className='bottom-left'>
                <img src={AddvantageBotto} alt="" />
            </div>
            <div className='bottom-right'>
                <img src={AddvantageBottomRight} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Aadvantage