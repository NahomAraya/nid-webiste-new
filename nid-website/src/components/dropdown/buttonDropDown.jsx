import React from "react";
import Button from "./button";
import DropDown from "./dropdown";
import { useTranslation } from 'react-i18next';

const sampleData = ["English","Amharic"]
const ButtonDropDown = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div
      className="dropdown"
      ref={drop}
      style={{
        position: "relative",
        margin: "16px",
        width: "auto",
        display: "inline-block",
        zIndex: "10"
      }}
    >
      <Button onClick={() => setOpen(open => !open)} />
      {open && 
           <div className="absolute w-56 h-auto shadow">
           <ul className="absolute  w-auto pt-1 text-white dropdown-menu">
             
               <li  className="block px-4 py-2 font-semibold whitespace-no-wrap border-b-2 rounded-t rounded-b cursor-pointer w-28 font-barlow bg-darkblue/50 hover:bg-green/80 hover:text-MetallicBlue border-white/20" onClick={() => {setOpen(false); changeLanguage("en")}}>
               English
               </li>
               <li className="block px-4 py-2 font-semibold whitespace-no-wrap border-b-2 rounded-t rounded-b cursor-pointer w-28 font-barlow bg-darkblue/50 hover:bg-green/80 hover:text-MetallicBlue border-white/20" onClick={() =>  {setOpen(false); changeLanguage("amh")}}>
               አማርኛ
               </li>
             
           </ul>
         </div>
      }
    </div>
  );
};

export default ButtonDropDown;