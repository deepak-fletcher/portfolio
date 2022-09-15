import React, { useEffect, useState } from "react";
import propic from "../assets/profile.png";
import seemore from "../assets/seemmore.png";
import "../stylesheet/Landingpage.css";
import FadeIn from "react-fade-in";
import "aos/dist/aos.css";
import Aos from 'aos';
import { useInViewport } from 'react-in-viewport';

// import {TextAnimationFadeIn} from 'react-native-text-effects';
import Typewriter from "typewriter-effect";

export const LandingPage = () => {
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[]);
  return (
    <div class=" bg-[#000000]">
      <div class=" flex flex-col">
      <FadeIn delay={500} transitionDuration={1000}>
        <div class="m-10 p-10 flex flex-col">
          <div className="welcomeText" class="basis-1/2">
            <h1 data-aos="fade-up" class="mt-8 text-3xl md:text-4xl lg:text-6xl col-span-1 text-[#FFFFFF]">
              Hi, I'm Deepak!
            </h1>
            <br></br>
            <h1 data-aos="fade-up"
              className="welcometext"
              class="text-3xl md:text-4xl lg:text-6xl text-[#FFFFFF]"
            >
              Welcome to my page!
            </h1>
          </div>
          <div class="basis-1/2"></div>
        </div>
        <div class="p-10 flex  flex-col">
          <div class="align-middle">
            <img data-aos="fade-up"
              class="mt-1 p-20 align-middle"
              className="photo"
              src={propic}
            />
          </div>
          <div class="basis-1/2">
            {/* <p className="description" class="mt-1 text-sm md:text-lg lg:text-xl align-middle p-10 text-[#FFFFFF]">
            <Typewriter
              onInit={(typewriter)=>{
                typewriter.typeString("I’m a Tech Enthusiast who ❤️ to Code, a Fast Learner and a gamer.<br></br>I like creating new web applications, I like to explore more of machine learning and how things work in that front and love designing wonderful User Interfaces.<br></br>I am a gamer and a tech enthusiast by night, I follow most consumer tech and also play a lot of battle royales.").pauseFor(1).start();
              }}>
            </Typewriter></p> */}

            <p data-aos="fade-up"
              className="fade-in"
              class="mt-10 text-sm md:text-lg lg:text-xl align-middle p-10 text-[#FFFFFF]"
            >
              I’m a Tech Enthusiast who ❤️ to Code, a Fast Learner and a gamer.
              <br></br><br></br>I like creating new web applications, I like to explore
              more of machine learning and how things work in that front and
              love designing wonderful User Interfaces.<br></br><br></br>I am a gamer and
              a tech enthusiast by night, I follow most consumer tech and also
              play a lot of battle royales.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" class="mb-9">
          <p  class="mt-1 text-sm md:text-lg lg:text-xl align-middle p-10 text-[#FFFFFF]">
            Scroll down to know more
          </p>
          <img 
            class="mt-1 mb-9 p-20 align-middle"
            className="downarrow"
            src={seemore}
          />
        </div>
        </FadeIn>
      </div>
    </div>
  );
};
