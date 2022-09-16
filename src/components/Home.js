import React from 'react'
import { LandingPage } from './LandingPage';
import {Skills} from './Skills';
import {Timeline} from './Timeline';

const Home = () => {
  return (
    <div>
        <LandingPage></LandingPage>
        <Skills class="m-9 p-10">
        </Skills>
        <Timeline></Timeline>
    </div>
        
  )
}

export default Home