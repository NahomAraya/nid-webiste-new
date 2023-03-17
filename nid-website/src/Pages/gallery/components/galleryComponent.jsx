import {AiOutlineRight} from 'react-icons/ai';
import React, { useState } from "react";
//import './news.css';
import Iframe from 'react-iframe';
import { useMediaQuery } from 'react-responsive'
import TextLoop from "react-text-loop";

import { FaFacebookF} from 'react-icons/fa'
import { BsTwitter} from 'react-icons/bs'
import { RiYoutubeFill} from 'react-icons/ri'
import {FaRegEdit } from 'react-icons/fa';
import { FaArtstation} from 'react-icons/fa';
import {BiSearchAlt } from 'react-icons/bi';
import {FaCanadianMapleLeaf} from 'react-icons/fa'
import { FaRegCommentAlt} from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate, useLocation } from "react-router-dom";


// const SidebarItems = ({ slug }) => {
//   switch(slug) {
//       case 'all':
//           return  <h1>All</h1>
//       case 'media':
//           return <h1>Media</h1>
//       default:
//           return null;
//   }
// }


const GalleryComponent = ({list}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    
      const navigate = useNavigate();
      const subPath = useLocation();
  
      const handleNavigate = (num, path) => {
          setActiveButtonIndex(num);
          navigate(path)
      }
      
      const [ activeButtonIndex, setActiveButtonIndex] = useState(0);

      return(
      <>
      <div className="relative flex top-28 ">
        <div class="relative flex flex-row backdrop-brightness-95 px-40 my-12 p-5 pr-24 w-screen">
        <div className="flex justify-start mr-10">
            
          <div className="relative w-[20%] -left-14">
            <h2 className="relative bottom-32 text-2xl font-semibold font-barlow">Categories</h2>

            <div className="grid gap-14 font-semibold text-MetallicBlue font-barlow w-44">
                <div className={"flex bg-green rounded-md items-center "} >          
                    <h3 className="self-start ml-2 font-barlow py-2"> All</h3>
                    { subPath.pathname === "/media/gallerysource/all"&&  
                    <div class="ml-auto pr-3">
                         <FaChevronRight className="w-5 h-5 text-white"/>
                    </div>
                    }
                </div>

                <div className={"flex hover:bg-green rounded-md items-center "}>
                  
                  
                  <h3 className="self-start ml-2 font-barlow py-2">Pictures</h3>
                  {/* { subPath.pathname === "/resources/media" && 
                  } */}
                  <div class="ml-auto pr-3">
                         <FaChevronRight className="w-5 h-5 text-white"/>
                  </div>
              </div>
              <div className={`${subPath.pathname === "/media/gallerysource/videos" ? "flex bg-green rounded-md items-center ":"" } flex hover:cursor-pointer`} onClick={()=> handleNavigate(1, "/media/gallerysource/videos")}>
              {/* {"flex hover:bg-green rounded-md items-center hover:visible"} */}
                  
                  <h3 className="self-start ml-2 font-barlow py-2">Videos</h3>
                  { subPath.pathname === "/media/all" && 
                  <div class="ml-auto pr-3 invisible">
                         <FaChevronRight className="w-5 h-5 text-white"/>
                  </div>
                  }
              </div>
            </div>
            {/* <hr className='absolute w-96 rotate-90 left-48' /> */}
          </div>
        </div>
          <div className=' w-[100%]'>
            <div className='relative grid grid-cols-4 gap-4 h-screen pb-16 scale-95 justify-center font-barlow font-medium text-MetallicBlue text-2xl'>
            {list.data.slice(0,1).map((listItem) => (
              <div className='relative bg-green h-full col-span-2 row-span-2 flex flex-col text-left place-content-end pl-10 pb-5'>{listItem.video_url}</div>
              ))} 
            {list.data.slice(1,5).map((listItem) => (
                <div className='bg-green h-full flex flex-col text-left place-content-end pl-7 pb-5'>{listItem.video_url}</div>
                ))} 

                {/* <div className='bg-green h-full flex flex-col text-left place-content-end pl-7 pb-5'>Document title here3</div>
                <div className='bg-green h-full flex flex-col text-left place-content-end pl-7 pb-5'>Document title here4</div>
                <div className='bg-green h-full flex flex-col text-left place-content-end pl-7 pb-5'>Document title here5</div> */}
                {list.data.slice(5,6).map((listItem) => (
                <div className='bg-green h-full col-span-2 flex flex-col text-left place-content-end pl-10 pb-5'>{listItem.video_url}</div>
                ))} 
                {list.data.slice(6,8).map((listItem) => (
                <div className='bg-green h-full row-span-2 flex flex-col text-left place-content-end pl-2 pb-5'>{listItem.video_url}</div>
                ))} 

                {/* <div className='bg-green h-full row-span-2 flex flex-col text-left place-content-end pl-2 pb-5'>Document title here8</div> */}
                {list.data.slice(8).map((listItem) => (
                <div className='bg-green h-full flex flex-col text-left place-content-end pl-10 pb-5'>{listItem.video_url}</div>
                ))} 

                {/* <div className='bg-green h-full flex flex-col text-left place-content-end pl-10 pb-5'>Document title here0</div> */}
            </div>
          </div>
          <div className='relative self-center bottom-8 opacity-40 hover:opacity-95 hover:cursor-pointer left-10'>
              <svg
                fill="#A3A1A2"
                height="100px"
                width="100px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 800"
                xmlSpace="preserve"
                transform="rotate(180)"
                stroke="#FFF"
                >
                  <path d="M148.32 255.76L386.08 18c4.053-4.267 3.947-10.987-.213-15.04a10.763 10.763 0 00-14.827 0L125.707 248.293a10.623 10.623 0 000 15.04L371.04 508.667c4.267 4.053 10.987 3.947 15.04-.213a10.763 10.763 0 000-14.827L148.32 255.76z" />
              </svg>
          </div>        
        </div>
        <hr className='absolute w-[50%] rotate-90 -ml-16 mt-24 top-96' />
      </div> 
            </>
        );
}
export default GalleryComponent;