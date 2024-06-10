import React from 'react'
import './Features.css'
import Round from "../asest/bgvisha.png"
import featuresImg from '../asest/features.png' 

const Features = () => {
  return (
    <div className='features'>
   <div className='features-left'> 
  <img src={Round} alt="" />
   </div>
   <div className='features-right'> 
    <img src={featuresImg} alt="" />
   </div>
    </div>
  )
}

export default Features