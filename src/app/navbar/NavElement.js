'use client'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import store from '../store'
import { useSelector } from 'react-redux'

export default function navelement(){
    const [activeElement,setActiveElement] = useState('home')
    const [searchToggle,setSearchToggle] = useState(false)
    const [showcart,setshowCart] = useState(true)
    const [cartnumber,setcartNumber] = useState({bool:false,value:0})
    const cartstate = useSelector((state)=>store.getState()['cartreducer'])
    //FUNCTION FOR LINKS
    function clickHandler(string){
        setActiveElement(string)
        console.log(activeElement)
    }

    //FUNCTION FOR SEARCH 
    function searchHandler(){
        if(searchToggle){
            console.log("Search Function here")
        }
        else{
            setSearchToggle(true)
            console.log(searchToggle)
        }
    }

    //FUNCTION FOR MAKING CART VISIBLE
    function cartHandler(){
        setshowCart(!showcart)
        console.log(showcart)
        store.dispatch({
            type:'showcart',
            payload:{showcart}
        })
        console.log(store.getState(),'NAV')
    }
    let num=0;
    //EFFECT FOR UPDATING NO OF ITEMS IN CART
    useEffect(()=>{
        if(cartstate.length>0){
            setcartNumber({bool:true,value:cartstate.length})
        }
        else
            setcartNumber({bool:false,value:0})
        let num = cartstate.length
    },[cartstate])
    return(
        <div>
            <div className="flex flex-row pt-10 px-5 ">
                <div id="image" className="text-white w-1/12">
                    <h1 className="text-xl font-semibold">R E L I S H</h1>
                </div>
                <div className="flex flex-row w-5/12">
                    <div id="links" className="text-white px-3 hover:text-gray-500">
                        <Link onClick={()=>clickHandler('home')} href="/">Home</Link>
                    </div>
                    <div id="links" className="text-white px-3 hover:text-gray-500">
                        <Link onClick={()=>clickHandler('category')} href="#">Categories</Link>
                    </div>
                    <div id="links" className="text-white px-3 hover:text-gray-500">
                        <Link onClick={()=>clickHandler('sale')} href="#">Sale</Link>
                    </div>
               </div>
               <div className="flex flex-row justify-end w-6/12">
                    <div className='basis-3/5 '>
                        {searchToggle&&<div>
                            <input className = "appearance-none -translate-y-2 text-black shadow-xl w-11/12 py-1 border-solid ring-xl rounded-lg bg-gray-500 pl-1" 
                            placeholder='Search for items...'/>
                                <button className='w-1/12 -translate-x-7' onClick={()=>setSearchToggle(false)}>
                                    <XMarkIcon className="h-6 w-6 font-bold"/>
                                </button>
                            </div>}
                    </div>
                    <div className="pr-5">
                        <button onClick={()=>searchHandler()}>
                        <MagnifyingGlassIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="px-5 max-h-7">
                            <button onClick={cartHandler}  >
                            <ShoppingCartIcon className="h-6 w-6"/>
                            </button>
                            {cartnumber.bool&&<div className='bg-white h-4 w-4 rounded-full translate-x-4 -translate-y-10'>
                                <p className=' text-black text-center text-xs font-extrabold' >{cartnumber.value}</p>
                            </div>}
                    </div>
                    <div className="px-5">
                        <Link href="/user/checkemail">
                            <UserIcon className='h-6 w-6'/>
                        </Link>
                    </div>
               </div>
            </div>
        </div>
    )
}