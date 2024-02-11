import Image from 'next/image';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
};
const ReactMultiCarouusel = () => {
  return (
    <div>
        <Carousel responsive={responsive}>
        <div>
            <img 
            loading="lazy"
            srcSet={"https://i.pinimg.com/564x/77/8d/ca/778dca34843c1e7be89e2214dc418e7a.jpg"}
            className="box-border object-cover overflow-hidden shrink-0 mt-5 w-full aspect-[1.42] min-h-[20px] min-w-[20px]"
            />

        </div>
          <div>
             <img 
            loading="lazy"
            srcSet={"https://i.pinimg.com/564x/0e/07/80/0e0780cec5095b930a6e5043d683ec03.jpg"}
            className="box-border object-cover overflow-hidden shrink-0 mt-5 w-full aspect-[1.42] min-h-[20px] min-w-[20px]"
            />
            

        </div>  
        <div>
            <img 
            loading="lazy"
            srcSet={"https://i.pinimg.com/564x/83/a2/85/83a28594abfb423e3a53ef70d04f22d0.jpg"}
            className="box-border object-cover overflow-hidden shrink-0 mt-5 w-full aspect-[1.42] min-h-[20px] min-w-[20px]"
            />
            

        </div> 
         <div>
             <img 
            loading="lazy"
            srcSet={"https://i.pinimg.com/564x/89/b9/49/89b94950b914f97a4c4831dcd1044dcc.jpg"}
            className="box-border object-cover overflow-hidden shrink-0 mt-5 w-full aspect-[1.42] min-h-[20px] min-w-[20px]"
            />
          

        </div>
        
       
        </Carousel>

    </div>
  )
}

export default ReactMultiCarouusel