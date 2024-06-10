import React from 'react'
import './Home.css'
import button1 from '../asest/button1.png'
import  button2 from '../asest/button2.png'
import zImage from '../asest/bgz.png'
import Frame1 from '../asest/Frame1.png'
import Frame2 from '../asest/secondphone.png'
import Frame3 from '../asest/firstphone.png'
import Features from './Features'
import Aadvantage from './Aadvantage'



const Home = () => {
  return (
    <>
    <div className='container'>
      <div className='left-container'>
        <div className='left-top'>
          <h1>Make The Best <br/> Finacial Decisions</h1>
          <h3>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br/> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</h3>
          <div className='btns'>
            <button className='stbtn'>Get Started <img src={button1} alt="" /></button>
            <button className='wvbtn'> <img src={button2}  /> Watch Video</button>
          </div>
        </div>

        <div className='left-bottom'>
             <img src={zImage} alt="" />
        </div>
      </div>



      <div className='right-container'>
         <img src={Frame1} className='frame1'/>
         <img src={Frame2} className='frame2' />
         <img src={Frame3} className='frame3' />
      </div>
      


    </div>
    <Features/>
    <Aadvantage/>
    </>
  )
}

export default Home