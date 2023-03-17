import React from 'react';
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
import logo from '../../../../assets/logo_white.png'


const Allevents = ({list, type}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  console.log(type);
  return (
    <>

    {list? 
    <div class="relative backdrop-brightness-95">


      <div className={isDesktopOrLaptop ? "relative flex flex-col w-[100%] text-white font-barlow font-extralight text-2xl " : "relative flex flex-col items-center text-white text-lg"}>
  <Carousel
        axis="horizontal"
        className="relative w-[100%] mt-24 h-4/5 "
        showArrows={true}
        showStatus={false}
        swipeable={true}
        // autoPlay={true}
    
        infiniteLoop={true}
        interval={2500}
        swipeScrollTolerance={80}
        // thumbWidth={90}
        transitionTime={1000}
        renderIndicator={false}

        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute " : "hidden"
              } top-0 bottom-32 flex justify-center items-center p-10 opacity-40 hover:opacity-100 cursor-pointer z-20 `}
              onClick={clickHandler}
            >
              <svg
                fill="#000000"
                height="70px"
                width="70px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 800"
                xmlSpace="preserve"
                stroke="#fff"
                strokeWidth={0.00511641}
                className=''
              >

                <path className='cls-arrow'
                 d="M148.32 255.76L386.08 18c4.053-4.267 3.947-10.987-.213-15.04a10.763 10.763 0 00-14.827 0L125.707 248.293a10.623 10.623 0 000 15.04L371.04 508.667c4.267 4.053 10.987 3.947 15.04-.213a10.763 10.763 0 000-14.827L148.32 255.76z" 
                 />
                
              </svg>
           
            </div>
          );
        }}
      
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0  bottom-44 right-0 flex justify-center items-center p-10 opacity-40 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <svg
                fill="#000000"
                height="70px"
                width="70px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 800"
                xmlSpace="preserve"
                transform="rotate(180)"
                stroke="#FFF"
                >
      <path d="M148.32 255.76L386.08 18c4.053-4.267 3.947-10.987-.213-15.04a10.763 10.763 0 00-14.827 0L125.707 248.293a10.623 10.623 0 000 15.04L371.04 508.667c4.267 4.053 10.987 3.947 15.04-.213a10.763 10.763 0 000-14.827L148.32 255.76z" />
              </svg>
            </div>
          );
        }}
      >

        <div className="relative flex flex-row justify-between p-10 space-x-16 text-left text-black px-36 ">
        {list.data.slice(0,3).map((listItem) => (
           type=="All" | type==listItem.type  ?
           <div className='relative flex-col'>
           <div className="relative flex flex-col w-[100%] h-80 pb-52 text-sm bg-faq-card rounded-2xl pt-36 items-start px-5 text-left space-y-2">
                 <div className='relative -left-3'>
                   <img src={logo} alt="nid logo" className="object-scale-down object-left md:h-16" />
                 </div>
                 <p className="relative py-1 text-3xl font-semibold leading-snug text-justify text-white font-poppins ">
                    Ethiopian <br /> National ID Program 
                 </p>
           </div>
           <div className='relative flex flex-col'>
           <h2 className='relative font-bold mt-7'>{listItem.title}</h2>
           <p className='text-sm font-medium '>{listItem.description}</p>
             <h1 className='my-4 text-lg font-normal'>{listItem.date}</h1>
              </div>
           </div>:
           <></>


        ))}
         

      
        </div> 
        <div className="relative flex flex-row justify-between p-10 space-x-16 text-left text-black px-36 ">
        {list.data.slice(4,7).map((listItem) => (
          type=="All" | type==listItem.type  &&
           <div className='relative flex-col'>
           <div className="relative flex flex-col w-[100%] h-80 pb-52 text-sm bg-faq-card rounded-2xl pt-36 items-start px-5 text-left space-y-2">
                 <div className='relative -left-3'>
                   <img src={logo} alt="nid logo" className="object-scale-down object-left md:h-16" />
                 </div>
                 <p className="relative py-1 text-3xl font-semibold leading-snug text-justify text-white font-poppins ">
                    Ethiopian <br /> National ID Program 
                 </p>
           </div>
           <div className='relative flex flex-col'>
           <h2 className='relative font-bold mt-7'>{listItem.title}</h2>
           <p className='text-sm font-medium '>{listItem.description}</p>
             <h1 className='my-4 text-lg font-normal'>{listItem.date}</h1>
              </div>
           </div>


        ))}
         

      
        </div> 
       

{/* <div className="relative flex flex-row justify-between p-10 space-x-16 text-left text-black px-36 ">
          <div className='relative flex-col'>
          <div className="relative flex flex-col w-[100%] h-80 pb-52 text-sm bg-faq-card rounded-2xl pt-36 items-start px-5 text-left space-y-2">
                <div className='relative -left-3'>
                  <img src={logo} alt="nid logo" className="object-scale-down object-left md:h-16" />
                </div>
                <p className="relative py-1 text-3xl font-semibold leading-snug text-justify text-white font-poppins ">
                   Ethiopian <br /> National ID Program 
                </p>
          </div>
          <div className='relative flex flex-col'>
          <h2 className='relative font-bold mt-7'>Webinar one</h2>
          <p className='text-sm font-medium '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusLorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus</p>
            <h1 className='my-4 text-lg font-normal'>Feb 25, 2023</h1>
             </div>
          </div>

          <div className='relative flex-col'>
          <div className="relative flex flex-col w-[100%] h-80 pb-52 text-sm bg-faq-card rounded-2xl pt-36 items-start px-5 text-left space-y-2">
                <div className='relative -left-3'>
                  <img src={logo} alt="nid logo" className="object-scale-down object-left md:h-16" />
                </div>
                <p className="relative py-1 text-3xl font-semibold leading-snug text-justify text-white font-poppins ">
                   Ethiopian <br /> National ID Program 
                </p>
          </div>
          <div className='relative flex flex-col'>
          <h2 className='relative font-bold mt-7'>Webinar two</h2>
          <p className='text-sm font-medium '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusLorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus</p>
            <h1 className='my-4 text-lg font-normal'>Feb 25, 2023</h1>
             </div>
          </div>

          <div className='relative flex-col'>
          <div className="relative flex flex-col w-[100%] h-80 pb-52 text-sm bg-faq-card rounded-2xl pt-36 items-start px-5 text-left space-y-2">
                <div className='relative -left-3'>
                  <img src={logo} alt="nid logo" className="object-scale-down object-left md:h-16" />
                </div>
                <p className="relative py-1 text-3xl font-semibold leading-snug text-justify text-white font-poppins ">
                   Ethiopian <br /> National ID Program 
                </p>
          </div>
          <div className='relative flex flex-col'>
          <h2 className='relative font-bold mt-7'>Webinar three</h2>
          <p className='text-sm font-medium '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusLorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus</p>
            <h1 className='my-4 text-lg font-normal'>Feb 25, 2023</h1>
             </div>
          </div>
        </div>

        <div className="relative flex flex-row justify-between p-10 space-x-16 text-left text-black px-36 ">
          <div className='relative flex-col'>
          <div className="relative flex flex-col w-[100%] h-80 pb-52 text-sm bg-faq-card rounded-2xl pt-36 items-start px-5 text-left space-y-2">
                <div className='relative -left-3'>
                  <img src={logo} alt="nid logo" className="object-scale-down object-left md:h-16" />
                </div>
                <p className="relative py-1 text-3xl font-semibold leading-snug text-justify text-white font-poppins ">
                   Ethiopian <br /> National ID Program 
                </p>
          </div>
          <div className='relative flex flex-col'>
          <h2 className='relative font-bold mt-7'>Event three</h2>
          <p className='text-sm font-medium '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusLorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus</p>
            <h1 className='my-4 text-lg font-normal'>Feb 25, 2023</h1>
             </div>
          </div>

          <div className='relative flex-col'>
          <div className="relative flex flex-col w-[100%] h-80 pb-52 text-sm bg-faq-card rounded-2xl pt-36 items-start px-5 text-left space-y-2">
                <div className='relative -left-3'>
                  <img src={logo} alt="nid logo" className="object-scale-down object-left md:h-16" />
                </div>
                <p className="relative py-1 text-3xl font-semibold leading-snug text-justify text-white font-poppins ">
                   Ethiopian <br /> National ID Program 
                </p>
          </div>
          <div className='relative flex flex-col'>
          <h2 className='relative font-bold mt-7'>Webinar three</h2>
          <p className='text-sm font-medium '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusLorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus</p>
            <h1 className='my-4 text-lg font-normal'>Feb 25, 2023</h1>
             </div>
          </div>

          <div className='relative flex-col'>
          <div className="relative flex flex-col w-[100%] h-80 pb-52 text-sm bg-faq-card rounded-2xl pt-36 items-start px-5 text-left space-y-2">
                <div className='relative -left-3'>
                  <img src={logo} alt="nid logo" className="object-scale-down object-left md:h-16" />
                </div>
                <p className="relative py-1 text-3xl font-semibold leading-snug text-justify text-white font-poppins ">
                   Ethiopian <br /> National ID Program 
                </p>
          </div>
          <div className='relative flex flex-col'>
          <h2 className='relative font-bold mt-7'>Event four</h2>
          <p className='text-sm font-medium '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusLorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus</p>
            <h1 className='my-4 text-lg font-normal'>Feb 25, 2023</h1>
             </div>
          </div>
        </div> */}
      </Carousel>
                </div>
              </div>:
              <></>


      }
    </>     
  )
}

export default Allevents