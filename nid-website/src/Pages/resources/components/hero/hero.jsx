import React from 'react'
 import { ReactComponent as PreRegIcon } from '../../../../assets/pre-register-icon.svg'
 import { ReactComponent as GetFaydaIcon } from  '../../../../assets/get-fayda-icon.svg'
 import { ReactComponent as UpdateFaydaIcon } from '../../../../assets/update-fayda-icon.svg'
 import { ReactComponent as FaydaAppIcon } from '../../../../assets/get-fayda-app-icon.svg'
 import { FadeIn, ScaleIn, Animate } from "../../../../hooks/animations";
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const {t} = useTranslation();
  return (
 
    <div class=" bg-resources-hero  bg-cover h-fit text-white">
    <div class=" bg-news-gradient">
   
            <div className="flex justify-start mx-32 pt-[16%] pb-16 text-7xl">
              <h1 className="pr-2 mb-0 font-extrabold text-white font-barlow">{t('nid')}</h1>
              <h1 className='mb-0 ml-2 font text-green font-barlow' >{t('resources-title')} </h1>
            </div>

            <div className='flex flex-col justify-start pb-16 mx-32 text-justify font-barlow'>
                <h1 className='pb-5 text-3xl'>{t('resource-explore')}</h1>
                <p className='mr-32 text-lg leading-snug font-barlow'>
                {t('resource-title-text')}
                
                </p>
            </div>
       </div>
            
  </div>
   
  )
}

export default Hero;
