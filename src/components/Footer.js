import React from 'react'
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <div class="w-[100%] h-[100px] border-y-2 bg-[#000000] flex flex-row">
        <p class="text-white m-auto w-[25%] font-bold text-xs">Portfolio of Deepak Rao Fletcher</p>
        <div class="w-[50%] m-auto">
            <p class="text-white font-bold text-xs">
                Designed using
            </p>
            <span class="m-auto mt-2 w-[150px] flex flex-row">
            <p class="text-white m-auto font-bold  text-[10px]">
                ReactJS
            </p>
            <p class="text-white font-bold m-auto text-xs">
                |
            </p>
            <p class="text-white font-bold m-auto text-[10px]">
                TailwindCSS
            </p>
            </span>
            
        </div>
        <div class="w-[25%] m-auto">
            <p class="text-white m-auto w-[100px] mb-2 text-xs font-bold">
                Find me on
            </p>
            <div class="flex w-[100px] m-auto flex-row">
            <a class="m-auto" href="https://github.com/deepak-fletcher">
                <img class="w-[15px] h-[15px] m-auto" id="github" className="image" src={github} ></img>
            </a>
            <a class="m-auto" href="https://www.linkedin.com/in/deepak-fletcher/">
                <img class="w-[15px] h-[15px] m-auto" id="linkedin" className="image" src={linkedin} ></img>
            </a>
            </div>
            
        </div>
    </div>
  )
}

export default Footer