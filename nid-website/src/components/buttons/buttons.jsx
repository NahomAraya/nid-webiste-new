import { useState } from "react";

const Buttons = (setCitizen) => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    
    const handleClick = (value) =>{
      setCitizen(value);
      console.log("Clicked");
    }
    return(
        <>
            <button  className={`${activeButtonIndex === 0 ? "bg-MetallicBlue text-white" : "bg-white text-black" }"content-center p-2 px-28  hover:cursor-pointer font-barlow text-xl`} onClick={() =>  {setActiveButtonIndex(0); setCitizen(true)}}>Citizen</button>
            <button className={`${activeButtonIndex === 1 ? "bg-MetallicBlue text-white" : "bg-white text-black" }"content-center p-2 px-28  hover:cursor-pointer font-barlow text-xl`} onClick={() =>  {setActiveButtonIndex(1); setCitizen(true)}}>Stakeholder</button>
 
    
        </>
    )
}
export default Buttons