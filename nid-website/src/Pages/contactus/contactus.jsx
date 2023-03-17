import React, {useState} from "react";
import Footer from "../../components/footer/footer";

import { useMediaQuery } from 'react-responsive';
import HeroLandingPage from "../contactus/components/hero/heroLandingPage";
import FaqTitle from "./components/faqtitle/faqTitle";
import Form from "./components/form/form";

import Contact from "./components/contact/contact";
import  Carousel  from './components/faq/carousel';
import Mobile from "./components/faq/Mobile";
import Heromobile from "./components/hero/heromoblie";
import Contactmobile from "./components/contact/contactmobile";
import Dropdown from "../about/components/history/dropdowns";
import Faq from "./components/faq/faq";
import SmallFooter from "../../components/footer/smallFooter";
import { Card } from "react-bootstrap";
import Example from "./components/faq/popup";


function ContactUs() {
  const [citizen, setCitizen] = useState(true);
  const [ activeButtonIndex, setActiveButtonIndex] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  return ( 
  <> 

  <Card/>

 <HeroLandingPage citizen={citizen}/>
 <FaqTitle/>
<Faq/>
<Mobile/>
{isDesktopOrLaptop? <Form/>: <Contactmobile/>}
<SmallFooter/>
<Example/>



  </>
  );
}

export default ContactUs;
