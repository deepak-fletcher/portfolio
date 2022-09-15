import React from 'react'
import "../stylesheet/Timeline.css"

const TimelineItem = (props) => {
  return (
    <div className='DataContainer'>
        <div className='DataContainer1'>
        <div data-aos="zoom-in" className='TitleContainer' class="flex flex-row">
            <div className='Title' class="w-[50%] justify-self-start justify-start ml-2">
                <p class="text-left text-xs font-bold p-2">{props.data.title}</p>
            </div>
            <div className='padding' class="w-[10%]">
            </div>
            <div className='Date'>
            <p class="text-right text-xs font-bold p-2">{props.data.date}</p>
            </div>
        </div>
        <div data-aos="zoom-in" className='DescriptionContainer' class="w-[100%] p-2 justify-start">
            <p class="text-left text-xs font-medium p-2">{props.data.text}</p>
        </div>
        </div>
    </div>
  )
}

export default TimelineItem