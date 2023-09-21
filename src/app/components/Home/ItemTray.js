'use client'

import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { listitem } from "../../config"
export default function ItemTray(props){
    const [items,setItems] = useState([])
    useEffect(()=>{
        axios.get(listitem).then(
            response=>setItems(response.data))
    },[])
    
    return(
        <div>
            <div className="flex flex-wrap justify-center">
                    {items.map((items,i)=>{
                        return(
                            <div className="w-1/5 px-5" key={i}>
                                <div>
                                    <Image height={200} width={200} alt="Image" src={items.imageURL}/>
                                    <p className="flex justify-center py-5">{items.name}</p>
                                    <p className="flex justify-center py-5">{items.price}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    )
}