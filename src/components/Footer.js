import React from 'react'
import react from '../assets/react.png';
import tailwind from '../assets/Tailwind.png';

const Footer = () => {
  return (
    <div class="w-[100%] h-[100px] border-y-2 bg-[#000000] flex flex-row">
        <p class="text-white m-auto w-[25%]">Portfolio of Deepak Rao Fletcher</p>
        <div class="w-[50%] m-auto">
            <p class="text-white">
                Designed using
            </p>
            <span class="m-auto mt-2 w-[100px] flex flex-row">
            <img class="m-auto w-10 l-10 align-middle" id="react" className="image" src={react}></img>
            <img class="m-auto w-7 l-7 align-middle" id="tailwind" className="image" src={tailwind}></img>
            </span>
            
        </div>
        <div class="w-[25%] m-auto">
            <p class="text-white">
                Find me on
            </p>
            
        </div>
    </div>
  )
}

export default Footer