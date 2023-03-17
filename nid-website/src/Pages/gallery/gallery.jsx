import React from "react";
import HeroLandingPage from "./components/heroLandingPage";
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getGalleries } from "../../redux/selectors";
import GalleryComponent from "./components/galleryComponent";
// import Allevents from "../media/components/events/allevents";


const Gallery = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
// const [Event, setEvent] = useState("Latest");
const galleriesList = useSelector(getGalleries);
const [ activeButtonIndex, setActiveButtonIndex] = useState(0);
const { t } = useTranslation();
useEffect(() => {
    console.log("to the top");
    window.scrollTo(0, 0);
  
  }, [])

    return( 
        <>
           
        <HeroLandingPage/>
        { isDesktopOrLaptop ?
                    (
                        <>
                        <div className="absolute mt-24 w-[60%] left-64 ml-36 text-lg mx-20 font-medium font-barlow z-10">
                            <button className=" bg-button-gradient text-white shadow-2xl rounded-sm px-16   "><h1>Gallery</h1></button>
                            <button className={`${activeButtonIndex === 0 ? "underline" : "" } content-center px-6 hover:cursor-pointer hover:underline`} onClick={() =>  {setActiveButtonIndex(0)}}>{t('Latest')}</button>
                            <button className={`${activeButtonIndex === 1 ? "underline" : ""  } content-center px-6 hover:cursor-pointer hover:underline`} onClick={() =>  {setActiveButtonIndex(1)}}>{t('Random')}</button>
                            <hr className="w-[95%] border-MetallicBlue border "/>  
                        </div>

                        <GalleryComponent list={galleriesList}/> 
                    </>
                    ):

                    (
                    <>
                        {/* enter mobile view file here */}
                    </>
                    )
             }
        
            
        </>
    )
}
export default Gallery;