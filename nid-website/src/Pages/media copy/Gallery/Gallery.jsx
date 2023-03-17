import {AiOutlineRight} from 'react-icons/ai';
import React from "react";
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



const Gallery = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
        return(
            <>
            <div className="hidden xl:inline">
     <div class="grid grid-cols-2 gap-6 mx-32 my-12">
  <div className="">
 
  <div className="flex ">
    <h1 className="text-4xl ">Catagories</h1>
    </div>
     
     
<div className='my-16'></div>
<div></div>
    <div className="flex ">
      
                       <h1 className="text-2xl text-black font-barlow ">All</h1>
                       <AiOutlineRight className="text-3xl text-black "/>
                        </div>

    <div className="text-2xl "><h1>Pictures</h1></div>
    <div className="text-2xl "><h1>Vedioes</h1></div>
     
  </div>
 

  <div>
 
  <div className="flex " >
    <h1 className=" text-2xl text-white whitespace-nowrap  bg-MetallicBlue  w-[100%] text-center pl-8 pr-8"><span className="rounded-sm ">Gallary</span></h1>
    <ul className="flex mx-20 text-2xl gap-28">
      <div>
      <li className="ml-4 ">Latest</li>
      <div className='bg-green h-2 w-[130%] '></div>
      </div>
      <div>
   
      </div>
      <div>
      <li>Random</li>
      </div>
         <div className='bg-green h-1 w-[40%] '></div>
    </ul>
    </div>
      <hr className="w-[200%] border-b-1 mb-12 border-MetallicBlue  font-light" />
     


  </div>

</div>


</div>

 
            </>
        );
}
export default Gallery;