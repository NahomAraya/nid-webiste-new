import React from 'react'
import { useTranslation } from 'react-i18next';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import Dropdownn from './dropdowns';

const History = ({list}) => {
  const {t} = useTranslation();
  return (
    <>
{list? 

<>

      <div className='flex flex-col gap-16'>

        <div class="shadow-xl overflow-hidden">

          <div className="flex flex-col items-center justify-center mt-10 text-4xl text-center font-barlow">
            <div className="flex text-5xl">
              <h1 className="pr-2 font-bold font-barlow text-MetallicBlue ">{t('nid')}</h1>
              <h1 className="pb-10 font-semibold font-barlow text-green">{t('history')}</h1>
            </div>
          </div>
          
          <div className='text-lg mx-28 '>
            <p className="mb-10 text-center text-MetallicBlue font-poppins">
           The Fayda IDMS is the  central Foundational ID Management system that integrates with many other external identification System(ABIS) alternative.and card
           printing services. The Fayda IDMS is the central Foundational ID Management system that intergrares with many other external 
           identification System(ABIS) alternative.and card authorities, organization and institution working together
           </p>
          </div>



          <div class="antialiased  font-sans ">
        
            <div class="container mx-auto">
              <div class="grid grid-cols-4  ">
              {
            list.data.map((listItem) => (

                <div class=" p-2  mt-10 ">

                  <a href="" class=" ">

                    <div class=" overflow-hidden ">


                      <div className="flex justify-start mb-5 text-2xl text-start text-MetallicBlue ">

                        <h1 className="pl-8 mb-0 font-semibold font-barlow text-MetallicBlue ">
                          {listItem.date}
                        </h1>
                     
                      </div>
                    
                    </div>
                    <div className=''>  <hr className="w-[44%] border-b-1  border-MetallicBlue -mt-6  ml-8"/></div>
                    <div className=''>
                      <p className="text-justify text-black font-poppins pl-7 pr-7 mb-7">
                    
                        {listItem.event}

                      </p>
                      <div class="w-full  p-300   ">
                        <a href="" class=" block bg-green/100 shadow-md hover:shadow-xl w-full  overflow-hidden">
                          <div class="flex justify-center text-white text-3xl">
                            <p>{listItem.year}</p>
                          </div>



                        </a>
                      </div>
                      <div>

                      </div>



                    </div>

                  </a>
                  <div className='relative bottom-20'>

                    <div className='absolute h-px rotate-90 bg-MetallicBlue w-14 bottom-1 -left-3'></div>

                    <div className="relative w-3 h-3 rounded-full bottom-7 left-2 bg-MetallicBlue"></div>


                  </div>
                </div>
            ))}

                {/* <div class="  pt-2 pb-2  mt-10">

                  <a href="" class=" ">

                    <div class=" overflow-hidden">


                      <div className="flex justify-start mb-5 text-2xl text-start text-MetallicBlue">

                        <h1 className="pl-8 mb-0 font-semibold font-barlow text-MetallicBlue ">
                          September 2021
                        </h1>

                    
                      </div>


                    </div>
                    <div className=''>  <hr className="w-[40%] border-b-1  border-MetallicBlue -mt-6  ml-8"/></div>
                    <div>
                     
                      <p className="text-justify text-black font-poppins pl-7 pr-7 mb-7">
                     
The program was led by the Ministry <br></br>of Peace(MDP) in collabration with <br></br> the ministry


                      </p>
                      <div class="w-full p-300">
                        <a href="" class=" block bg-green/70 shadow-md hover:shadow-xl  overflow-hidden">
                          <div class="flex justify-center text-white text-3xl">
                            <p>2018</p>
                          </div>



                        </a>
                        <div className='relative bottom-20'>

                          <div className='absolute h-px rotate-90 bg-MetallicBlue w-14 bottom-1 -left-3'></div>
                          <div className="relative w-3 h-3 rounded-full bottom-7 left-2 bg-MetallicBlue"></div>


                        </div>
                      </div>
                      <div>

                      </div>

                    </div>

                  </a>

                </div>

                <div class=" pt-2 pb-2  pl-2 mt-10 ">

<a href="" class=" ">

  <div class=" overflow-hidden ">


    <div className="flex justify-start mb-5 text-2xl text-start text-MetallicBlue ">

      <h1 className="pl-8 mb-0 font-semibold font-barlow text-MetallicBlue ">
        September 2021
      </h1>

    </div>



  </div>
  <div className=''>  <hr className="w-[40%] border-b-1  border-MetallicBlue -mt-6  ml-8"/></div>
  <div className=''>
    <p className="text-justify text-black font-poppins pl-7 pr-7 mb-7">

    The program was led by the Ministry <br></br>of Peace(MDP) in collabration with <br></br> the ministry


    </p>
    <div class="w-full  p-300    ">
      <a href="" class=" block bg-green/100 shadow-md hover:shadow-xl w-full  overflow-hidden">
        <div class="flex justify-center text-white text-3xl">
          <p>2019-2021</p>
        </div>


      </a>
    </div>
    <div>

    </div>

  </div>

</a>
<div className='relative bottom-20'>

  <div className='absolute h-px rotate-90 bg-MetallicBlue w-14 bottom-1 -left-3'></div>
  <div className="relative w-3 h-3 rounded-full bottom-7 left-2 bg-MetallicBlue"></div>


</div>
</div>

<div class="  p-2  mt-10">

<a href="" class=" ">

  <div class=" overflow-hidden">


    <div className="flex justify-start mb-5 text-2xl text-start text-MetallicBlue">

      <h1 className="pl-8 mb-0 font-semibold font-barlow text-MetallicBlue ">
        September 2021
      </h1>


    </div>


  </div>


  <div className=''>  <hr className="w-[40%] border-b-1  border-MetallicBlue -mt-6  ml-8"/></div>
  <div>
    <p className="text-justify text-black font-poppins pl-7 pr-7 mb-7 ">
The program was led by the Ministry <br></br>of Peace(MDP) in collabration with <br></br> the ministry

    </p>
    <div class="w-full   ">
      <a href="" class=" block bg-green/70 shadow-md hover:shadow-xl  overflow-hidden">
        <div class="flex justify-center text-white text-3xl">
          <p>2021 -Present</p>
        </div>



      </a>
      <div className='relative bottom-20 '>

        <div className='absolute h-px rotate-90 bg-MetallicBlue w-14 bottom-1 -left-3'></div>
        <div className="relative w-3 h-3 rounded-full bottom-7 left-2 bg-MetallicBlue"></div>


      </div>
    </div>
    <div>

    </div>

  </div>

</a>

</div> */}

             
              </div>
            </div>
         
          </div>

          <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center text-2xl">

            <div className='flex items-center justify-between'></div>
           
            <div></div>
          </div>


        </div>

      </div>
    <Dropdownn/>
    </>
    :
    <></>

}
    </>
  )
}

export default History;
