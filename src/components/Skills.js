import React, {useState} from 'react'
import python from '../assets/python.png'
import js from '../assets/js.png'
import "../stylesheet/skills.css"
import java from '../assets/java.png'
import c from '../assets/c.png'
import react from '../assets/react.png'
import springboot from '../assets/springboot.png'
import html from '../assets/html.png'
import css from '../assets/htmlcss.png'
import sql from '../assets/sql.png'
export const Skills = () => {
  return (
    <div class="h-screen bg-[#000000] overflow-auto">
        <div class="flex flex-col">
        <div class="m-10 p-10 flex md:flex-row flex-col">
          <div className="skills" class="basis-1/4 m-9">
              <img class="m-5 p-9 align-middle"  className="image" src={python} />
          </div>
          <div className='skills' class="basis-1/4 m-9">
              <img class="m-5 p-9 align-middle" className="image" src={js}></img>
          </div>
          <div className='skills' class="basis-1/4 m-9">
              <img class="m-5 p-9 align-middle" className="image" src={java}></img>
          </div>
          <div className='skills' class="basis-1/4 m-9">
              <img class="m-5 p-9 align-middle" className="image" src={c}></img>
          </div>
        </div>
        <div class="m-10 p-10 flex md:flex-row flex-col">
          <div className="skills" class="basis-1/4 m-9">
              <img class="m-5 p-9 align-middle"  className="image" src={react} />
          </div>
          <div className='skills' class="basis-1/4 m-9">
              <img class="m-5 p-9 align-middle" className="image" src={springboot}></img>
          </div>
          <div className='skills' class="basis-1/4 m-9">
              <img class="m-5 p-9 align-middle" className="image" src={html}></img>
          </div>
          <div className='skills' class="basis-1/4 m-9">
              <img class="m-5 p-9 align-middle" className="image" src={css}></img>
          </div>
        </div>
        <div class="m-10 p-10 flex md:flex-row flex-col">
          <div className="skills" class="basis-[100%] m-9">
              <img class="m-5 p-9 align-middle"  className="image" src={sql} />
          </div>
        </div>
      </div>
    </div>
  )
}
