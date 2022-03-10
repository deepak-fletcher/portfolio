import React from 'react'
import propic from '../assets/profile.png'
import seemore from '../assets/seemmore.png'
import '../stylesheet/Landingpage.css'
import Typewriter from "typewriter-effect";

export const LandingPage = () => {
  return (
    <div class="h-screen bg-[#000000] overflow-auto">
      <div class="flex flex-col">
        <div class="m-10 p-10 flex md:flex-row flex-col">
          <div className="welcomeText" class="basis-1/2"><h1 class="text-3xl md:text-4xl lg:text-6xl col-span-1 text-[#FFFFFF]">Hi, I'm Deepak Rao Fletcher!</h1><br></br><h1 className="welcometext" class="text-3xl md:text-4xl lg:text-6xl text-[#FFFFFF]" >Welcome to my page!</h1></div>
          <div class="basis-1/2"></div>
        </div>
        <div class="p-10 flex md:flex-row  flex-col">
          <div class="basis-1/2 align-middle"><img class="mt-1 p-20 align-middle"  className="photo" src={propic} /></div>
          <div class="basis-1/2"><p className="description" class="mt-1 text-sm md:text-lg lg:text-xl align-middle p-10 text-[#FFFFFF]">
            <Typewriter
              onInit={(typewriter)=>{
                typewriter.typeString("I’m a Tech Enthusiast who ❤️ to Code, a Fast Learner and a gamer.<br></br>I like creating new web applications, I like to explore more of machine learning and how things work in that front and love designing wonderful User Interfaces.<br></br>I am a gamer and a tech enthusiast by night, I follow most consumer tech and also play a lot of battle royales.").start();
              }}>
            </Typewriter></p></div>
        </div>
        <div>
          <p class="mt-1 text-sm md:text-lg lg:text-xl align-middle p-10 text-[#FFFFFF]">Scroll down to know more</p>
          <img class="mt-1 p-20 align-middle"  className="downarrow" src={seemore} />
          
        </div>
        
      </div>


      
    </div>
  )
}
