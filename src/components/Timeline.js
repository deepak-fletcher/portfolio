import React from 'react';
import TimelineItem from './TimelineItem';
import TimeLineData from  './TimeLineData.js';
import "../stylesheet/Timeline.css"

export const Timeline = () => {
  return (
    <div data-aos="zoom-in" class="bg-[#000000] pb-[100px]">
      <p data-aos="zoom-in" class="text-white  text-2xl mb-5">Timeline</p>
      <div className="TimelineContainer">
        {TimeLineData.map((data)=>{
          return(<TimelineItem data={data}></TimelineItem>);
        })}
        
      </div>
    </div>
  )
}
