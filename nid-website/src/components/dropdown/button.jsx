import React,{useEffect, useState} from "react";
import TextTransition, { presets } from "react-text-transition";


const TEXTS = [
    "Language",
    "ቋንቋ"
  ];
// const [index, setIndex] = useState(0);
// useEffect(()=>{

//     const intervalId = setInterval(() =>
//     setIndex(index => index + 1),
//     3000 // every 3 seconds
//   );
//   return () => clearTimeout(intervalId);
//   },[]);
 
const Button = ({ onClick }) =>{
    const [index, setIndex] = useState(0);
useEffect(()=>{

    const intervalId = setInterval(() =>
    setIndex(index => index + 1),
    3000 // every 3 seconds
  );
  return () => clearTimeout(intervalId);
  },[]);


    
  return(
    <button className="inline-flex items-center px-4 py-1 font-semibold text-white rounded-md place-content-center center-item w-28 bg-darkblue/50 font-barlow" onClick={onClick}>
    <TextTransition springConfig={presets.wobbly}>
                     {TEXTS[index % TEXTS.length]}
                 </TextTransition>
                 <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
        
 </button>

 );

 
}
export default Button;