import { AnimateIn, SlideIn } from "./animateIn";

export const FadeIn = ({ children }) => (
    <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {children}
    </AnimateIn>
  );
  
export const FadeUp = ({ children }) => (
    <AnimateIn
      from={{ opacity: 0, translate: "0 2rem" }}
      to={{ opacity: 1, translate: "none" }}
    >
      {children}
    </AnimateIn>
  );
  
export  const ScaleIn = ({ children }) => (
    <AnimateIn from={{ scale: "0" }} to={{ scale: "1" }}>
      {children}
    </AnimateIn>
  );
// export const SlideLeft = ({children}) => (
//     <SlideIn from={{    transform: translateX(0),  opacity: 1 }}> to ={{  opacity: 0, transform: translateX("100vw")}}

//     </SlideIn>

// )
  
export  const Animate = {
    FadeIn,
    FadeUp,
    ScaleIn
  };