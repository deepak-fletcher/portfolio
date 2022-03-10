import React from 'react';
import { MdHome } from "react-icons/md";
import { MdGames } from "react-icons/md";
import { MdBuild } from "react-icons/md";
import { MdShare } from "react-icons/md";
import "../stylesheet/navbar.css";

const NavBar = () => {
  return (
    // <IconContext.Provider value={{size="2em"}}>
    <div className="navbar" class="h-16 bg-[#000000] fixed w-full z-10 top-0 flex flex-row-reverse">
      <p class="text-[#ffffff] pl-1 pr-1  pt-5 pb-5 mr-5">Socials</p>
            <p class="text-[#ffffff] pl-10 pr-.5 pt-5 pb-5"><MdShare size="25px"></MdShare></p>
            <p class="text-[#ffffff] pl-1 pr-1  pt-5 pb-5">Hobbies</p>
            <p class="text-[#ffffff] pl-10 pr-.5 pt-5 pb-5"><MdGames size="25px"></MdGames></p>
            <p class="text-[#ffffff] pl-1 pr-1  pt-5 pb-5">Skills</p>
            <p class="text-[#ffffff] pl-10 pr-.5 pt-5 pb-5"><MdBuild size="25px"></MdBuild></p>
            <p class="text-[#ffffff] pl-1 pr-1 pt-5 pb-5 ">Home</p> 
            <p class="text-[#ffffff] pl-10 pr-.5 pt-5 pb-5"><MdHome size="25px"></MdHome></p>
    </div>
    // </IconContext.Provider>
  );
}

export default NavBar