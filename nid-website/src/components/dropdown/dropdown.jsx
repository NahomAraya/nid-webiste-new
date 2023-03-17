import React from "react";



const DropDown= ({ data = [], setOpen }) =>

(
  
  <div className="absolute w-56 h-auto shadow">
  <ul className="absolute hidden w-auto pt-1 text-white dropdown-menu">
    {data.map((item, i) => (
      <li key={i} className="block px-4 py-2 font-semibold whitespace-no-wrap border-b-2 rounded-t rounded-b cursor-pointer w-28 font-barlow bg-darkblue/50 hover:bg-green/80 hover:text-MetallicBlue border-white/20" onClick={() => setOpen(false)}>
        {item}
      </li>
    ))}
  </ul>
</div>
);

export default DropDown;