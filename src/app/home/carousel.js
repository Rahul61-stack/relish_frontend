'use client';

import { useState } from "react"
import Image from "next/image";
import { ArrowRightCircleIcon,ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export default function Carousel_relish(){
    const imgsrc = [
        "/IMG/fT1S2YI24fwO76XiRbrtLRKSFbrAU63fKkTOKwCT.jpg",
        "/IMG/AKA8518.jpg",
        "/IMG/triyansh-gill-DYDIF2OuavM-unsplash.jpg"
    ]
    //CAROUSEL PREV SLIDE FUNCTION
    const [index,setIndex] = useState(0)
    function prevSlide(){
        const currentslide = index===0
        const newindex = currentslide?imgsrc.length-1:index-1
        setIndex(newindex)
    }

    //CAROUSEL NEXT SLIDE FUNCTOIN
    function nextSlide(){
        const currentslide = index===imgsrc.length-1
        const newindex = currentslide? 0:index+1
        setIndex(newindex)
    }
    return(
        <div className="container mx-auto px-3 pt-20 w-fit relative group">
            <div className="">
                <Image className="active:transition active:ease-in-out active:duration-500 rounded-3xl" src={imgsrc[index]} width={1200} height={600}/>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] left-5 pt-1 rounded-full px-1 bg-opacity-50 hover:-translate-x-1 transition ease-in-out hover:bg-opacity-100 bg-black">
                <button onClick={prevSlide} >
                <ArrowLeftCircleIcon width={30} height={30} color="white" />
                </button>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] right-5 pt-1 rounded-full px-1 bg-opacity-50 hover:translate-x-1 transition ease-in-out hover:bg-opacity-100 bg-black">
                <button onClick={nextSlide}>
                <ArrowRightCircleIcon width={30} height={30} color="white" />
                </button>
            </div>
        </div>
    )
}