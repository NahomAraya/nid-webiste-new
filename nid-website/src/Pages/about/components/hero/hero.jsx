import React from 'react'
import { useTranslation } from 'react-i18next';



const Hero = () => {
  const {t} = useTranslation()
  return (
 
    <header class="bg-footer bg-right-bottom bg-cover ">
    <div class="grid grid-cols-1 gap-16 px-6 py-40 ">
    </div>
    <div className="flex justify-start pb-10 text-6xl ml-28 ">
              <h1 className="pr-2 mb-0 font-bold text-white font-barlow ">
              {t("about-title")} 
              </h1>
              {/* <h3 className="font-medium pb-7 font-barlow text-green"> We </h3>
              <h1 className='mb-0 ml-2 text-white font-barlow' > are </h1> */}
            </div>
  </header>



   
  )
}

export default Hero;
