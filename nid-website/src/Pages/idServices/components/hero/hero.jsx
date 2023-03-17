import React from 'react'
import { useTranslation } from 'react-i18next'
 import PreRegIcon from '../../../../assets/pre-register-icon.svg'
 import GetFaydaIcon from '../../../../assets/get-fayda-icon.svg'
 import UpdateFaydaIcon from '../../../../assets/update-fayda-icon.svg'
 import FaydaAppIcon from '../../../../assets/get-fayda-app-icon.svg'
 

const Hero = () => {
  const {t} = useTranslation();
  return (
 
    <div class=" bg-id-services-hero  bg-cover  ">
    <div class=" bg-top-bot-gradient">
   
            <div className="flex justify-start mx-32 pt-[16%] text-6xl">
              <h1 className="pr-2 mb-0 font-extrabold text-white font-barlow">{t('services-title1')}</h1>
              <h1 className='mb-0 ml-2 font text-green font-barlow' >{t('services-title2')} </h1>
            </div>

            <div className='grid h-full grid-cols-4 gap-8 px-16 pb-10 align-middle font-barlow'>

                <div className='flex items-center justify-center h-full'> 
                    <div className='flex flex-col items-center justify-center h-[50%] bg-white mx-16 my-2 font-semibold text-center transition-all duration-300  rounded-lg shadow-lg cursor-pointer w-[90%] hover:scale-110 hover:bg-green shadow-lightblue text-MetallicBlue'>
                      
                      {/* <PreRegIcon className='h-[40%] ' /> */}
                      <img src={PreRegIcon} alt="PreregIcon " className='h-[40%]' />
                       
                      <div className='w-[70%] border-b-2 border-lightblue mr-1 my-2'></div>
                         <h1 className='px-10 text-xl font-bold leading-tight'>{t('services-pre-reg')}</h1>
                    </div>
                    <div className='w-0.5 h-16 ml-1 bg-lightblue/50'></div>
                </div>


                <div className='flex items-center justify-center h-full'> 
                    <div className=' cursor-pointer hover:scale-110 transition-all h-[50%] duration-300 shadow-lg shadow-lightblue f flex flex-col justify-center  mx-16 my-2 text-center bg-white w-[90%] rounded-lg items-center hover:bg-green font-semibold text-MetallicBlue'>
                    <img src={GetFaydaIcon} alt="GetFaydaIcon " className='h-[40%]' />
                         <div className='w-[70%] border-b-2 border-lightblue mr-1 my-2'></div>
                         <h1  className='px-10 text-xl font-bold leading-tight'>{t('services-get-no')}</h1>
                    </div>
                    <div className='w-0.5 h-16 ml-1 bg-lightblue/50'></div>
                </div>
             
             
                <div className='flex items-center justify-center h-full '> 
                    <div className=' hover:scale-105 transition-all duration-300  h-[50%] cursor-pointer shadow-lg shadow-lightblue f flex flex-col justify-center hover:bg-green  mx-16 my-2 text-center bg-white w-[90%] rounded-lg items-center font-semibold text-MetallicBlue'>
                    <img src={UpdateFaydaIcon} alt="UpdateFaydaIcon " className='h-[40%]' />
                    <div className='w-[70%] border-b-2 border-lightblue mr-1 my-2'></div>
                         <h1  className='px-10 text-xl font-bold leading-tight '>{t('services-update-no')}</h1>
                    </div>
                    <div className='w-1 h-16 ml-1 bg-lightblue/50'></div>
                </div>



{/* card */}
                <div className='flex items-center justify-center h-full '> 
                    <div className='hover:scale-110 transition-all duration-300 shadow-lg h-[50%] shadow-lightblue flex flex-col justify-center mx-16 my-2 hover:bg-green text-center bg-white w-[90%] rounded-lg cursor-pointer items-center font-semibold text-MetallicBlue'>
                    <img src={FaydaAppIcon} alt="FaydaAppIcon " className='h-[40%]' />
                    <div className='w-[70%] border-b-2 border-lightblue mr-1 my-2'></div>
                         <h1  className='px-10 text-xl font-bold leading-tight'>{t('services-get-fayda')}</h1>
                    </div>
                    <div className='w-0.5 h-16 mr-1 '></div>
                </div>
            </div>
       </div>
            
  </div>
   
  )
}

export default Hero;
