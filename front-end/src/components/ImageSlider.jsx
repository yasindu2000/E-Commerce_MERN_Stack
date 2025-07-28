import { useState } from "react";


function ImageSlider(props) {

    const images = props.images;

    const [activeImageIndex, setActiveImageIndex] = useState(0);




  return (
    <div className="w-[400px] h-[500px] ">
         <img src={images[activeImageIndex]} alt="" className="w-full h-[400px] object-cover rounded-[5px]" />
         <div className="w-full h-[100px] flex flex-row justify-center items-center gap-[5px]">
            {
                images.map(
                    (image, index)=>{
                        return(
                                 <img onClick={
                                    ()=>{
                                        setActiveImageIndex(index)
                                    }
                                 } src={image} key={index} alt="" className={"w-[90px] h-[90px] object-cover cursor-pointer "+(activeImageIndex == index && "border-[4px]")} />
                        )
                           
                        
                    }
                )
            }

         </div>
    </div>
  )
}

export default ImageSlider