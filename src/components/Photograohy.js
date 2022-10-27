import React from 'react'
import {Carousel} from '3d-react-carousal';
import "../stylesheet/hobbies.css" 
import "../stylesheet/gaming.css";
import photography from '../assets/photography.png'


const Photograohy = () => {
    let slides = [<img  src="https://i.imgur.com/ZY6NhEi.jpg" alt="1" />,
    <img  src="https://i.imgur.com/wk9EP9M.jpg" alt="2" />  ,
    <img  src="https://i.imgur.com/Z492Zdd.jpg" alt="3" />  ,
    <img  src="https://i.imgur.com/9i0H7db.jpg" alt="4" /> ];
  return (
    <div class="h-screen w-[100%]">
        <div class="h-full w-full bg-black md:flex md:flex-row overflow-hidden ">
            <div class="w-[100%] lg:w-[60%] h-[80%] mt-auto mb-auto bg-black">
                <p class="font-bold text-[35px] mt-auto text-white pt-[65px] pb-[20px]">Photography</p>
                <div class="flex lg:hidden w-[100%] h-[50%] md:h-[30%] mt-auto mb-auto flex-wrap flex-row place-items-center">
                
                    <img class=" flex place-content-center m-auto w-[70%]" src={photography}></img>       
                </div>
                <Carousel slides={slides} autoplay={true} interval={3000} class="lg:m-auto"/>
                {/* <div class="bg-white h-[500px] w-[350px] rounded shadow-white shadow-lg m-auto mt-[50px]">
                    <div class=" h-[400px] border-b-2 border-black w-[350px] ml-auto mr-auto">

                    </div>
                </div> */}
            </div>
            <div class="hidden lg:flex lg:w-[40%] h-[80%] mt-auto mb-auto flex-wrap flex-row place-items-center">
                
                <img class=" flex place-content-center sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[400px]" src={photography}></img>       
            </div>
        </div>
    </div>
  )
}

export default Photograohy