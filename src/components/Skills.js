import React, {useEffect, useState} from 'react';
import python from '../assets/python.png';
import js from '../assets/js.png';
import Aos from 'aos';
import "../stylesheet/skills.css";
import java from '../assets/java.png';
import c from '../assets/c.png';
import "aos/dist/aos.css"
import react from '../assets/react.png';
import springboot from '../assets/springboot.png';
import html from '../assets/html.png';
import css from '../assets/htmlcss.png';
import sql from '../assets/sql.png';
import Modal from './Modal';
import FadeIn from "react-fade-in";
 

let description = {
  python : "I have used python since 2017, and can do regular programming using python with ease. I have used python for a variety of machine learning related tasks througout college.",
  js : "I have worked on JS since 2019, but it wasnt until 2020 that I learnt the proper language JS. I have worked on a few User intrfaces using REACT where js is used in abundance.",
  java : "Having used Java since 2015, I have worked on a number of spheres using java(Spring boot, Android app development, Advanced Java). I have also recieved my training in advanced java and spring boot on joining Cognizant.",
  c : "I have used C for basic programming and not more than that.",
  react :"I have used reactjs and react native since 2020 but its not until recently that i had starting understanding the basic concepts underlying in react, After which i have created the front end for a project that was done during training, and alos the portfolio app that you are viewing now.",
  springboot :"I had solely learnt Spring Boot as a part of the training program at cognizant. Spring boot provides easy integration with react and all REST API's, I would like to explore other backend services in the future too like nodejs",
  html : "Even though its not the first language i learnt to create an user interface with, its by far the most simplest one. I have been using html and css where ever i go ever since",
  css : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  sql : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
}
export const Skills = () => {
  const [header, setHeader] = useState('')
  const [Description, setDescription] = useState('')
  const [show, setShow] = useState(false)
  const data = (Title, Data) => {
    setHeader(Title)
    setDescription(Data)
  }
  const showModal = (a) =>
  {
    let key = a.target.id
    let value = description[a.target.id]
    setShow(true)
    data(key, value)
  }
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[]);
  return (
    <div class="bg-[#000000]">
        
        <div data-aos="fade-up" class="mt-10 flex flex-col">
        
        
        <p data-aos="fade-up" class="mt-10 text-3xl mt-10 md:text-2xl lg:text-4xl col-span-1 text-[#FFFFFF]">Programming Languages</p>
        <div  class="m-5 p-10 flex md:flex-row flex-col" >
          <div data-aos="fade-up" className="skills" class="basis-1/4 m-9">
              <img class="mb-10 mt-10 ml-5 mr-5 p-9 align-middle" id="python"  className="image" src={python} onClick={(e)=>showModal(e)}/>
          </div>
          <div data-aos="fade-up" className='skills' class="basis-1/4 m-9">
              <img class="mb-10 mt-10 ml-5 mr-5 p-9 align-middle" id="js" className="image" src={js} onClick={(e)=>showModal(e)}></img>
          </div>
          <div data-aos="fade-up" className='skills' class="basis-1/4 m-9">
              <img class="mb-10 mt-10 ml-5 mr-5 p-9 align-middle" id="java" className="image" src={java} onClick={(e)=>showModal(e)}></img>
          </div>
          <div data-aos="fade-up" className='skills' class="basis-1/4 m-9">
              <img class="mb-10 mt-10 ml-5 mr-5 p-9 align-middle" id="c" className="image" src={c} onClick={(e)=>showModal(e)}></img>
          </div>
        </div>
        <p data-aos="fade-up" class="text-3xl md:text-2xl lg:text-4xl col-span-1 text-[#FFFFFF]">Frameworks</p>
        <div  class="m-5 p-10 flex md:flex-row flex-col">
          <div data-aos="fade-up" className="skills" class="basis-1/4 m-9">
              <img class="mb-10 mt-10 ml-5 mr-5 p-9 align-middle" id="react" className="image" src={react} onClick={(e)=>showModal(e)}/>
          </div>
          <div data-aos="fade-up" className='skills' class="basis-1/4 m-9">
              <img class="mb-10 mt-10 ml-5 mr-5 p-9 align-middle" id="springboot" className="image" src={springboot} onClick={(e)=>showModal(e)}></img>
          </div>
          <div data-aos="fade-up" className='skills' class="basis-1/4 m-9">
              <img class="mb-10 mt-10 ml-5 mr-5 p-9 align-middle" id="html" className="image" src={html} onClick={(e)=>showModal(e)}></img>
          </div>
          <div data-aos="fade-up" className='skills' class="basis-1/4 m-9">
              <img class="mb-10 mt-10 ml-5 mr-5 p-9 align-middle" id="css" className="image" src={css} onClick={(e)=>showModal(e)}></img>
          </div>
        </div>
        <p data-aos="fade-up" class="text-3xl md:text-2xl lg:text-4xl col-span-1 text-[#FFFFFF]">Databases</p>
        <div  class="mb-10 mt-10 ml-5 mr-5 p-10 flex md:flex-row flex-col">
          <div data-aos="fade-up" className="skills" class="basis-[100%] m-9">
              <img class="m-5 p-9 align-middle" id="sql"  className="image" src={sql} onClick={(e)=>showModal(e)}/>
          </div>
        </div>

      </div>
      <Modal onClose={()=>setShow(false)} show={show} head={header} desc={Description}></Modal>
    </div>
  )
}
