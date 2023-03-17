import React, {useState, useEffect} from "react";
import { useMediaQuery } from 'react-responsive';
import { Route, Router, Routes } from "react-router-dom";
import Landing from "./Pages/landing/landing"
import AboutPage from "./Pages/about/about";
import IdServices from "./Pages/idServices/idServices";
import ContactUs from "./Pages/contactus/contactus";
import Media from "./Pages/media/media";
import Mediacopy from "./Pages/media copy/media";
import Resources from "./Pages/resources/resources";
import { useDispatch } from "react-redux";
import { getAboutList, getNewsList, getFaqList, getTestList, getResourcesList, getEventsList, getSocialsList, getHistoryList, getTopNewsList, getGalleryList } from "../src/redux/actions"
import LoadingSpinner from "./components/loadingSpinner/loadingSpinner";
import Gallery from "./Pages/gallery/gallery";




function App() {
  const dispatch = useDispatch();
  const [citizen, setCitizen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [ activeButtonIndex, setActiveButtonIndex] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  useEffect
  (
    ()=>
    {
      const timer = setTimeout(()=> {
        setIsLoading(false);
     }, 3000);
     dispatch(getAboutList());
     dispatch(getNewsList());
     dispatch(getFaqList());
     dispatch(getTestList());
     dispatch(getResourcesList());
     dispatch(getEventsList());
     dispatch(getSocialsList());
     dispatch(getResourcesList());
     dispatch(getHistoryList());
     dispatch(getTopNewsList());
     dispatch(getGalleryList())
     
   
     return () => {
       clearTimeout(timer);
     }
    
   
   
    },
    [dispatch]
  )
  return (
   
   
  <> 
   {isLoading? <LoadingSpinner/> :

  <Routes>
   <Route path="/" element={<Landing/>}/>
   <Route path="/about" element={<AboutPage/>}/>
  
   <Route path="/services" element={<IdServices/>}/>
   <Route path="/faq" element={<ContactUs/>}/>
   <Route path="/news" element={<Media/>}/>
   <Route path="/events" element={<Mediacopy/>}/>
   <Route path="/resources" element={<Resources title={"All"}/>}/>
   <Route path="/media" element={<Resources title={"Media"}/>}/>
   <Route path="/media/gallery/all" element={<Gallery title={"All"}/>}/>
   <Route path="/media/gallery/pictures" element={<Gallery title={"Pictures"}/>}/>
   <Route path="/media/gallery/videos" element={<Gallery title={"Videos"}/>}/>

   <Route path="/mou" element={<Resources title={"MOU"}/>}/>
   <Route path="/decks" element={<Resources title={"Decks"}/>}/>
   <Route path="/polices" element={<Resources title={"Polices"}/>}/>
   <Route path="/documents" element={<Resources title={"Publications"}/>}/>
   <Route path="/nidspecifications" element={<Resources title={"Specifcations"}/>}/>
    
  
   </Routes>

}
  </>

  
  );
}

export default App;