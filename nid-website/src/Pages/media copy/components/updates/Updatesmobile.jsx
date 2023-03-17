import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { CarouselData } from "./CarouselData";
import { FaFacebookF} from 'react-icons/fa'
import { BsTwitter} from 'react-icons/bs'
import { RiYoutubeFill} from 'react-icons/ri'
const Updatesmobile= () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };  

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <>
    {/* for small screen */}
    <div className='hidden max-xl:inline  '>

    <div className="flex flex-col justify-center text-center mt-20 items-center">
    <div>
    <div> <img className="" src={require('../../../../assets/photo1.jpg')} alt="news1"/></div>
    <div className="text-2xl font-semibold"><h1>News Title</h1></div>
    <div className=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum atque facilis ratione amet voluptatibus maiores</p></div>
    <div className="font-light" ><h3>feb 25, 2023</h3></div>
  </div>
            </div>
        <div className='bg-footer bg-right-bottom bg-cover '>
    <div className="carousel    pl-10 pr-10 flex flex-wrap mx-3 ">
      
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-black w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
             
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {CarouselData.map((resource, index) => {
            return (
              <div
              key={index}
              className="carousel-item text-center relative w-64 h-64 snap-start p-2"
            >
               
              <a
            href='#'
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden  hover:bg-green"
                style={{ backgroundColor:'',  }}
              >
                <img  src={resource.image} className="w-40 h-20 object-cover"></img>
              <div className='my-20'>
                 
         
              <h1 className="text-black font-barlow font-semibold text-3xl">{resource.title}</h1>
                <p>{resource.text}</p>
              </div>
                
              </a>

</div>
            
            );
          })}
        </div>
      </div>
    </div>
    </div> 
    <div class="grid grid-cols-1 hidden max-xl:inline">
  <div class="col-span-2">
    <div
      data-te-spy="scroll"
      data-te-target="#scrollspy1"
      data-te-offset="200"
      class="relative h-48 overflow-auto">
      <section id="example-1">
      <div class="  md:w-1/2 xl:w-2/5 p-4  ">

               
           <div className="flex gap-2 mb-10 text-sm leading-tight text-left md:pl-28">
          
           
                    <div className="w-14 ">
                      <div
                       
                        className="p-2 rounded-lg bg-darkblue  xl:w-3/4 "
                        alt="Icon_checklist"
                      >
                          < FaFacebookF  className='text-4xl text-white' />
                      </div>
                    </div>
               
                    <p className="text-justify text-black font-poppins flex justify-center items-center">
                    <p className='text-2xl font-semibold'>Facebook</p>
                    <button className=' w-[100%] border-2 px-8 text-center text-2xl rounded-lg md:ml-28'>Like</button>
                    </p>
            </div>
         
            <div className="flex gap-4 mb-10 text-sm leading-tight text-left md:pl-28">
           
                    <div className="w-14">
                      <div
                      
                        className="p-2  rounded-lg bg-dodgerblue xl:w-3/4 "
                        alt="Icon_checklist"
                      >
                          < BsTwitter  className='text-4xl text-white  ' />
                        </div>
                    </div>
                    <p className="text-justify text-block font-poppins flex justify-center items-center">
                    <h1 className='text-2xl font-semibold'>Twitter</h1>
                    <button className=' w-[100%] border-2  px-8 text-center text-2xl rounded-lg md:ml-36'>Follow</button>
                    </p>
            </div>

         
            <div className="flex gap-2 text-sm leading-tight text-left md:pl-28  ">
           
                    <div className="w-14 ">
                      <div className="p-2  rounded-lg bg-darkred xl:w-3/4 "
                        alt="Icon_checklist"
                      >
                          <RiYoutubeFill className='text-4xl text-white' />
                          
                      </div>
                    </div>
                    <p className="text-justify text-black font-poppins  flex justify-center items-center">
                    <p className='text-2xl font-semibold'>Youtube</p>
                    <button className=' w-[100%] border-2  text-center text-2xl rounded-lg px-4  md:ml-32'>Subscribe</button>
             </p>

     
            </div>
       

                            
    

</div>
        
      </section>
    
               
    </div>
  </div>
  <div className=" border-2  rounded-xl  md:mx-20 ">
  <div className=" text-2xl text-MetallicBlue font-bold flex ml-4"> <p>Tweets from NID</p> <div className="mx-1 text-green text-3xl">  <a className='flex justify-center items-center ml-4 md:mx-28'><BsTwitter/></a></div> </div>

  <div className=' '>  <hr className="w-[80%] border-b-2  border-MetallicBlue  ml-4"/></div>
      <div className="flex justify-start items-center ">
    <div className=""><img className="left-0 h-20 w-28 md:object-scale-down md:h-18 p-1 my-2 object-cover " src={require('../../../../assets/logo_only.png')} alt="news1"/> </div>
        <div className=" text-2xl">  <p> <span className=" font-semibold">National ID Program-Ethiopia</span> <br></br>@IDethiopia</p> </div>
        
        
    </div>
    <div className="p-1 px-2 md:mx-16 "><p className='text-1xl'>Lorem ipsum dolor sit amet consectetur<br></br> Eos incidunt velit fugit vero eum </p></div>
      </div>
     
  <div>

  
  </div>
</div>
       
</div>
 
    </>
  );
};

export default Updatesmobile;
