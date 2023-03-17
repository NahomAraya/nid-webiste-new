import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {AiOutlineDown} from 'react-icons/ai';
import Swipe from "react-easy-swipe";
import { Slide } from "@mui/material";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
   
    return (
        <>
        <div className="  hidden max-md:inline">
        <div className="flex flex-col justify-center text-4xl text-center mt-20 items-center">
        <h1 className="pr-2 mb-0 font-semibold font-barlow  text-MetallicBlue ">
                Nid Partners  
              </h1>
              <div className='bg-MetallicBlue h-1 w-[7%] '></div>
           
            </div>

            <div className='para'>
            <p className="mt-0 text-sm  text-MetallicBlue font-poppins text-center">
               Authorites, organization and institution working togather for the use of the digital identity actors
              </p>
            </div>
      <div className="mt-8   "  >
        <div className="max-w-3xl h-72 flex overflow-hidden relative  border-t-2 border-indigo-50 bg-white shadow-xl hover:shadow-md rounded-md  mt-2 ">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-MetallicBlue cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}  className="  absolute inset-10  h-40 w-60 container max-w-screen-lg mx-auto pb-7">
            {CarouselData.map((slide, index) => {
              return (
               

                  <img src={slide.image} 
                  alt="This is a carousel slide"
                  key={index}
                  className= {
                    index === this.state.currentSlide
                      ? "block w-full h-auto object-cover"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}

                  
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0 " >
            {CarouselData.map((Slide, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-MetallicBlue rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-MetallicBlue cursor-pointer"
          />
        </div>
      </div>

      <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
 
  <button class="bg-purple-900 text-MetallicBlue hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">Learn More</button>
<AiOutlineDown className=' text-MetallicBlue text-xl'/>
  
</div>
      </div>
    </>

    );

  }
}

export default Carousel;