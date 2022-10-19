import React from 'react'
import { Parallax } from 'react-parallax'
import Game1 from '../assets/gaming.jpg'
import Game2 from '../assets/gaming2.jpg'
import Photo1 from '../assets/photo1.jpg'
import Photo2 from '../assets/photo2.jpg'
import Cars from '../assets/cars.jpg'
import Music from '../assets/music.jpg'
import "../stylesheet/hobbies.css" 

const Gaming = () => {
  return (
    <div>
    <Parallax className='parallax-image' bgImage={Game2} strength={800}>
        <div>
            <span>
                TESTING..REST COMING SOON
            </span>
        </div>
    </Parallax>
    <Parallax className='parallax-image' bgImage={Game1} strength={800}>
        <div>
            <span>
                TESTING..REST COMING SOON
            </span>
        </div>
    </Parallax>
    <Parallax className='parallax-image' bgImage={Photo1} strength={800}>
        <div>
            <span>
                TESTING..REST COMING SOON
            </span>
        </div>
    </Parallax>
    <Parallax className='parallax-image' bgImage={Photo2} strength={800}>
        <div>
            <span>
                TESTING..REST COMING SOON
            </span>
        </div>
    </Parallax>
    <Parallax className='parallax-image' bgImage={Music} strength={800}>
        <div>
            <span>
                TESTING..REST COMING SOON
            </span>
        </div>
    </Parallax>
    <Parallax className='parallax-image' bgImage={Cars} strength={800}>
        <div>
            <span>
                TESTING..REST COMING SOON
            </span>
        </div>
    </Parallax>
    </div>
  )
}

export default Gaming