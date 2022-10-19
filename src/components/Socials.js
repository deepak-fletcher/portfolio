import React from 'react'
import { useEffect } from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const Socials = () => {
  return (
    <div class="p-9 md:h-[100vh] w-full">
        <p class="text-white font-bold text-2xl mt-[80px]">Find my profile interesting? <br></br><br></br>Contact me through:</p>
        <div class="grid grid-rows-5 md:grid-rows-3 lg:grid-rows-1 grid-flow-col gap-2 mt-[80px] mb-[80px]">
            <div class="text-white font-bold text-sm mt-[15px]">
            <a class="m-auto" href="https://github.com/deepak-fletcher">
                  <img class="w-[55px] h-[55px] m-auto p-2 hover:w-[57px] hover:cursor-pointer" id="linkedin" src={github} ></img>
              </a>
              Github
            </div>
            <div class="text-white font-bold text-sm mt-[15px]">
            <a class="m-auto" href="https://www.facebook.com/deepakrao.fletcher/">
                  <img class="w-[55px] h-[55px] m-auto p-2 hover:w-[57px] hover:cursor-pointer" id="linkedin" src="https://cdn.cdnlogo.com/logos/f/74/facebook-3.svg"></img>
              </a>
              Facebook
            </div>
            <div class="text-white font-bold text-sm mt-[15px]" >
              <a class="m-auto" href="https://www.linkedin.com/in/deepak-fletcher/">
                  <img class="w-[55px] h-[55px] m-auto p-2 hover:w-[57px] hover:cursor-pointer" id="linkedin" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" ></img>
              </a>
              LinkedIn</div>
            <div class="text-white font-bold text-sm mt-[15px]">
            <a class="m-auto" href="https://gitlab.com/deepak_fletcher">
                  <img class="w-[55px] h-[55px] m-auto p-2 hover:w-[57px] hover:cursor-pointer" id="linkedin" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png" ></img>
              </a>
              Gitlab</div>
            <div class="text-white font-bold text-sm mt-[15px]">
            <a class="m-auto" href="https://www.instagram.com/deepak__fletcher/">
                  <img class="w-[55px] h-[55px] m-auto p-2 hover:w-[57px] hover:cursor-pointer" id="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" ></img>
              </a>Instagram</div>
      </div>
    </div>
  )
}

export default Socials