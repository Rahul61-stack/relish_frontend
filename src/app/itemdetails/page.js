'use client'
import { getitem } from "../config" 
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
export default function Page(){
    const params = useParams();
    const [item,setItem] = useState([])

    //FUNCTION TO GET THE ITEM WITH ID
    useEffect(()=>{
        axios.post(getitem,params).then(
            response=>setItem(response.data)
        )
    },[])
    const [dorr,setDorr] = useState(true)
    return(
        <div className="h-screen bg-gradient-to-r from-slate-600 to-black pt-10">
            <div className="container w-4/5 mx-auto top-6 bg-gradient-to-r from-slate-400 to-slate-900 pb-10 rounded-2xl">
            <div className="flex flex-row">
                <div className="flex-none px-40 pt-20">
                    <Image src={item.imageURL} height={300} width={300} className="rounded-lg"/>
                </div>
                <div className="px-20 pt-20">
                    <p className="text-4xl pb-2">{item.name}</p>
                    <div className="flex">
                        <div>
                            <StarIcon height={20}/>
                        </div>
                        <div>
                            <StarIcon height={20}/>
                        </div>
                        <div>
                            <StarIcon height={20}/>
                        </div>
                        <div>
                            <StarIcon height={20}/>
                        </div>
                        <div>
                            <StarIcon height={20}/>        
                        </div>                         
                    </div>
                    <p className="text-2xl pt-2">{item.price} & Free Shipping</p>
                    <button className="translate-y-20 p-2 bg-slate-200 font-semibold rounded-full text-black">
                        BUY NOW
                    </button>
                    <button className="translate-x-5 p-2 bg-slate-200 font-semibold text-black rounded-full translate-y-20">
                        ADD TO CART
                    </button>
                </div>
            </div>
            <div className="flex translate-y-5 translate-x-40 w-4/5 border-t-2 border-b-2">
                <div className="">
                    <button onClick={()=>setDorr(true)} className={`h-12 ${dorr?"text-black font-semibold":""}`}>Description</button>
                </div>
                <div>
                    <button onClick={()=>setDorr(false)} className={`translate-x-10 h-12 ${!dorr?"text-black font-semibold":""}`}>Reviews</button>
                </div>
            </div>
            <div className="translate-x-40 w-4/5 pt-10">
                {dorr?<p>{item.description}</p>: //Code for description
                <p>Reviews</p>
                //code for reviews
                }
            </div>
            </div>
            
        </div>
    )
}