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
import mongodb from '../assets/mongodb.png';
import nodejs from '../assets/nodejs.png';
import Modal from './Modal';
import FadeIn from "react-fade-in";
 

let description = {
  python : "I have worked on a number of projects using python and machine learning, cross topic argument miner where the topic and the context of a sentence was detected from a group of sentences was one of the first projects i did using python and machine learning, after which I worked on a Natural language processing related project where un-structured data was being converted to structured to make an NLP model. I have worked on web scrapinf using python and also worked on a video summarization project using deep CNN.",
  js : "I started learning JS to help me understand react better, I have worked on the basic concepts on JS and also have worked on a number of ReactJS projects and also on nodeJS.",
  java : "I have worked on numerous programming tasks in java, I am worked a lot with java programming since school days, which pushed me towards android development during my initial years after joining college, I also have knowledge on advanced java concepts. My previous job also included work related to looking into and debugging java code for issues.",
  c : "I have experience working on basic programming using C.",
  react :"I have worked with ReactJS on numerous projects like hotel management system, portfolio app, todo app, virtualq etc. I have experience with working with react for close to a year and have done multiple personal projects using the framework.",
  springboot :"I have worked on a few projects backend using spring boot.",
  html : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  css : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  sql : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  mongodb : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  nodejs : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
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
        <div  class="m-5 mb-[-5px] pb-[-10px] p-10 flex md:flex-row flex-col">
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
        <div data-aos="fade-up" className='skills' class="basis-1/4 m-9 pb-10">
              <img class="mb-10 mt-10 ml-5 mr-5 p-9 align-middle" id="nodejs" className="image" src={nodejs} onClick={(e)=>showModal(e)}></img>
        </div>
        <p data-aos="fade-up" class="text-3xl md:text-2xl lg:text-4xl col-span-1 text-[#FFFFFF]">Databases</p>
        <div  class="mb-10 mt-10 ml-5 mr-5 p-10 flex md:flex-row flex-col">
          <div data-aos="fade-up" className="skills" class="basis-[100%]">
              {/* <img class="m-5 p-9 align-middle" id="sql"  className="image" src={sql} onClick={(e)=>showModal(e)}/> */}
          </div>
          
          <div data-aos="fade-up" className="skills" class="basis-[100%] m-9">
              <img class="m-5 p-9 align-middle" id="mongodb"  className="image" src={mongodb} onClick={(e)=>showModal(e)}/>
          </div>
          <div data-aos="fade-up" className="skills" class="basis-[100%] m-9">
              <img class="m-5 p-9 align-middle" id="sql"  className="image" src={sql} onClick={(e)=>showModal(e)}/>
          </div>
          <div data-aos="fade-up" className="skills" class="basis-[100%]">
              {/* <img class="m-5 p-9 align-middle" id="sql"  className="image" src={sql} onClick={(e)=>showModal(e)}/> */}
          </div>
        </div>

      </div>
      <Modal onClose={()=>setShow(false)} show={show} head={header} desc={Description}></Modal>
    </div>
  )
}
