import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { listitem } from "../config"
import { useRouter } from "next/navigation"
import Link from "next/link"
import store from "../store"
export default function ItemTray(props){
    const [items,setItems] = useState([])
    const router = useRouter()

    //FUNCTION FOR ADDING ITEMS TO CART
   function cartHandler(name,price,url){
        store.dispatch({
            type:'addToCart',
            payload:{
                name:name,
                price:price,
                imgurl:url
            }
        })
        console.log(store.getState()['cartreducer'])
   }
    return(
        <div>
            <div className="flex-col flex-wrap justify-center items-center">
                    {props.items.map((items,i)=>{
                        return(
                            <div className="translate-x-20 flex flex-row py-5 w-10/12 border-y border-y-slate-700" key={i}>
                                <div className="basis-1/6 flex-none">
                                    <Image width={200}  height={200} alt="Image" src={items.imageURL} className="rounded-xl"/>
                                </div>
                                <div className="px-20">
                                    <Link href={{ pathname:`/home/${items._id}`}}>
                                    <p className="text-2xl font-bold pb-3">{items.name}</p>
                                    </Link>
                                    <p className="line-clamp-2 text-xs">{items.description}</p>
                                    <p className="font-bold pt-4 text-xl">{items.price}</p>
                                    <button className="pr-5 pt-4">
                                        BUY NOW
                                    </button>
                                    <button onClick={()=>cartHandler(items.name,items.price,items.imageURL)}>
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    )
}
