import React from 'react'
import { useTranslation } from 'react-i18next';

const Updatenumber = () => {
  const {t} = useTranslation();
  return (
 
    <div class="relative flex  h-80 items-center justify-center my-5 gap-10 ">
        <div className="relative flex flex-col w-[60%] text-left pl-28 pt-12 h-full" >
                <h1 className='mt-3 mb-3 text-5xl font-medium text-MetallicBlue font-barlow'>{t('services-update-fayda-text')}</h1>
                <hr className='w-[12%] h-1 border-none bg-green mb-6' />

            <p className='text-xl text-justify font-barlow opacity-80 '>{t('services-update-fayda-text2')}</p>
        </div>

        <div className=' w-[40%]  h-full justify-center flex items-center'> 
            {/* <h2 className='relative w-full py-6 text-2xl font-medium text-center border-2 rounded-full font-barlow border-MetallicBlue text-MetallicBlue'>Learn More </h2> */}
            
            <button className="px-0  text-xl py-3 w-[45%] hover:text-white/90 shadow-md rounded-full hover:bg-[#083247] transition-all transform duration-300 border-MetallicBlue/40 border-2 text-MetallicBlue">
            {t('learn-more')}
              </button>
        </div>
  </div>
   
  )
}

export default Updatenumber;
