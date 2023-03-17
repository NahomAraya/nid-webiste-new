import React from "react";
import Hero from "./components/hero/hero";
import HeroLandingPage from "./components/hero/heroLandingPage";
import { useMediaQuery } from 'react-responsive'
import News from "./components/newss/News";
import NewsMobile from "./components/newss/Newsmobile";
import Events from "./components/events/events";
import Webinars from "./components/events/webinars";
import Allevents from "./components/events/allevents";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getEvents, getNews, getSocials, getTopNews } from "../../redux/selectors";
import Updates from "./components/updates/Updates";
import Updatesmobile from "./components/updates/Updatesmobile";
import Gallery from "../gallery/gallery";
import Footer from "../../components/footer/smallFooter"
import { Card } from "react-bootstrap";

const Media = () => {
 var topList = [];
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
const [Event, setEvent] = useState("All");
const eventList = useSelector(getEvents);
const newsList = useSelector(getNews);
const topNewsList = useSelector(getTopNews);
const socialList = useSelector(getSocials)
const [ activeButtonIndex, setActiveButtonIndex] = useState(0);
const { t } = useTranslation();
const setTopNews = () => {
    
    newsList.data.map((listItem, index)=> {
        if(listItem.pin==1){
          topList.push(index);
           
        }
    } 
    )
}
useEffect(() => {
    console.log("Setting Top")
    window.scrollTo(0, 0);
    setTopNews();
    console.log(topList)
  
  }, [])

    return( 
        <>
           
        <HeroLandingPage/>

        {/*  */}
    {/*  */}
        
        {isDesktopOrLaptop? 
            <News list={topNewsList}/>:
            <NewsMobile/>
          
        }
  <Updates newslist={newsList} socials={socialList}/>
<Updatesmobile/>
<Card />
        { isDesktopOrLaptop ?
                    (
                        <>
                        <div className=" absolute mt-14 w-[81%] left-16 text-lg mx-20 font-medium font-barlow z-10">
                            <button className="px-16 text-white rounded-sm shadow-2xl bg-button-gradient"><h1>Events</h1></button>
                            <button className={`${activeButtonIndex === 0 ? "underline" : "" } content-center px-6 hover:cursor-pointer hover:underline`} onClick={() =>  {setActiveButtonIndex(0); setEvent("All")}}>{t('All')}</button>
                            <button className={`${activeButtonIndex === 1 ? "underline" : ""  } content-center px-6 hover:cursor-pointer hover:underline`} onClick={() =>  {setActiveButtonIndex(1); setEvent("Event")}}>{t('Events')}</button>
                            <button className={`${activeButtonIndex === 2 ? "underline" : ""  } content-center px-6 hover:cursor-pointer hover:underline`} onClick={() =>  {setActiveButtonIndex(2); setEvent("Webinar")}}>{t('Webinars')}</button> 
                            <hr className="w-[100%] border-MetallicBlue border "/>  
                        </div>

                        {/* <div><hr className="relative w-screen -bottom-80" /></div> */}
                        <Allevents list={eventList} type={Event}/>
                        {/* {  Event === 0 ? <> <Allevents/> </> 
                         : Event === 1 ? <> <Events/> </> 
                         : Event === 2 ? <> <Webinars/> </> 
                         : <> </> } */}
                         <Footer/>


                    </>
                    ):

                    (
                    <>
                        {/* enter mobile view here */}
                    </>
                    )
             }
          
        </>
    )
}
export default Media;