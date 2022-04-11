import React, { useState, useEffect } from 'react'
import "../stylesheet/modal.css"
import "aos/dist/aos.css";
import Aos from 'aos';
// import FadeIn from "react-fade-in";

const Modal = (props) => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[]);
  if(!props.show){
    return null
  }
  
  
  return (
    
    <div data-aos="fade-up" className='modal'>
    <div className='modalContent' >
      <div className='modalHeader' class="border-b-2 border-white-800">
          <h1 class="text-xl text-3xl text-center">{props.head.toUpperCase()}</h1>
      </div>
      <div className='modalBody' class="border-b-2 border-white-800">
          <h2 class="m-5 p-3 text-sm text-left">{props.desc}</h2>
      </div>
      <div className='modalFooter'>
          <button class="m-5 pl-8 pr-8 pt-2 pb-2 rounded-full bg-sky-500/100 hover:bg-sky-400/100" onClick={props.onClose}>Close</button>
      </div>

    </div>
    </div>
  )
}

export default Modal