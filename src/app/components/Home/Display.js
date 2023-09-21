import Image from "next/image"
import { Carousel } from "react-responsive-carousel"

export default function Display(){
    const imgsrc = [
        "/IMG/fT1S2YI24fwO76XiRbrtLRKSFbrAU63fKkTOKwCT.jpg",
        "/IMG/AKA8518.jpg",
        "/IMG/triyansh-gill-DYDIF2OuavM-unsplash.jpg"
    ]
    return(
        <div>
            <div className="container mx-auto px-3 pt-10 ">
                <Carousel>
                    <div>
                            <Image width={1073} height={616} src="/IMG/fT1S2YI24fwO76XiRbrtLRKSFbrAU63fKkTOKwCT.jpg"/>
                            <p>Legend1</p>
                    </div>
                </Carousel>    
                    
                
            </div>
        </div>
    )
}