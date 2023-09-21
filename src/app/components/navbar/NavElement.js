'use client'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
export default function navelement(){
    const [activeElement,setActiveElement] = useState('home')
    const [searchToggle,setSearchToggle] = useState(false)
    function clickHandler(string){
        setActiveElement(string)
        console.log(activeElement)
    }
    function searchHandler(){
        if(searchToggle){
            console.log("Search Function here")
        }
        else{
            setSearchToggle(true)
        }
    }
    return(
        <div>
            <div className="flex flex-row pt-10 px-5 ">
                <div id="image" className="text-white w-1/12">
                    <h1 className="text-xl font-semibold">R E L I S H</h1>
                </div>
                <div className="flex flex-row w-5/12">
                    <div id="links" className="text-white px-3 hover:text-gray-500">
                        <Link onClick={()=>clickHandler('home')} href="#">Home</Link>
                    </div>
                    <div id="links" className="text-white px-3 hover:text-gray-500">
                        <Link onClick={()=>clickHandler('category')} href="#">Categories</Link>
                    </div>
                    <div id="links" className="text-white px-3 hover:text-gray-500">
                        <Link onClick={()=>clickHandler('sale')} href="#">Sale</Link>
                    </div>
               </div>
               <div className="flex flex-row justify-end w-6/12">
                    <div className='pr-5 basis-3/5'>
                        {searchToggle&&<div>
                            <input className = "placeholder:text-align-center text-black shadow-xl w-11/12 pt-1 border-solid border-zinc-950 rounded-lg bg-gray-500 focus:caret-slate-500 pl-1" placeholder='Search for items.........'/>
                                <button className='w-1/12' onClick={()=>setSearchToggle(false)}>
                                    <XMarkIcon className="h-6 w-6"/>
                                </button>
                            </div>}
                    </div>
                    <div className="px-5">
                        <button onClick={searchHandler}>
                        <MagnifyingGlassIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="px-5">
                            <button>
                            <ShoppingCartIcon className="h-6 w-6"/>
                            </button>
                    </div>
                    <div className="px-5">
                        <Link href="/components/Auth/Presignup">
                            <UserIcon className='h-6 w-6'/>
                        </Link>
                    </div>
               </div>
            </div>
        </div>
    )
}