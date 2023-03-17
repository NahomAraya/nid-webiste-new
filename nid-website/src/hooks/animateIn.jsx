import React, { ReactDOM, useState, useEffect, useRef }  from "react";
 


  
  function useElementOnScreen(ref, rootMargin = "0px") {
    const [isIntersecting, setIsIntersecting] = useState(true);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
    return isIntersecting;
  }
  
  export const AnimateIn = ({ from, to, children }) => {
    const ref = useRef(null);
    const onScreen = useElementOnScreen(ref);
    const defaultStyles  = {
      transition: "1500ms ease-in-out"
    };
    return (
      <div
        ref={ref}
        style={
          onScreen
            ? {
                ...defaultStyles,
                ...to
              }
            : {
                ...defaultStyles,
                ...from
              }
        }
      >
        {children}
      </div>
    );
  };
  export const SlideIn = ({from, to, children }) => {
    const ref = useRef(null);
    const onScreen = useElementOnScreen(ref);
    const defaultStyles = {
      transition: "1500s "
    };
    return (
      <div
        ref={ref}
        style={
          onScreen
            ? {
                ...defaultStyles,
                ...to
              }
            : {
                ...defaultStyles,
                ...from
              }
        }
      >
        {children}
      </div>
    );

  }
 
  
 