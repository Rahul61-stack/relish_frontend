'use client'
import ItemTray from './ItemTray'
import Display from './Display'
import Cart from '../cart/page'
import showcartstore  from '../store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import { listitem } from '../config'

export default function HomePage(){
    const [showcart,setshowCart] = useState(false)
    const state = useSelector((state)=>showcartstore.getState())
    const [items,setItems] = useState([])
    
    //TO GET ITEMS FROM MONGO
    useEffect(()=>{
        axios.get(listitem).then(
            response=>setItems(response.data))
    },[])

    //EFFECT USED FOR MAKING CART VISIBLE
    useEffect(()=>{
        setshowCart(state['showcartreducer'].cartvisible)
    },[state])
    return (
        
        <div>
            <div className={`${showcart?"blur-lg pointer-events-none":""} relative`}>
                <Display></Display>
                <div className='flex justify-center text-3xl py-10'>
                    <p className='text-4xl font-bold'>Our Best Sellers<Link className="text-sm pl-5" href="#">View all best sellers</Link></p><ChevronDoubleRightIcon className='translate-y-5' width={15} height={15}/>
                </div>
                    <ItemTray items={items}></ItemTray>
                <div className='flex justify-center text-3xl py-10'>
                    <p className='text-4xl font-bold'>Items on Sale</p>
                </div>   
                    <ItemTray items={items}></ItemTray>
            </div>
            {showcart&&
                <div className='fixed top-1/3'>
                    <Cart></Cart>
                </div>
                }
        </div>
        
    )
}
//no page.js created for this since this is the default page of the website