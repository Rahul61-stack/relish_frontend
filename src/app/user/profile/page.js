"use client"
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightSharp } from "@mui/icons-material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiRoutes } from "../../config";
import { useSelector } from "react-redux";

export default function Profile(){
    const [customer,setCustomer] = useState([])
    const id = useSelector(state=>state.auth.login.id)
    useEffect(()=>{
        axios.get(apiRoutes("getcustomer",id)).then(response=>setCustomer(response.data))
    },[])
    function converter(name){
        if(name==undefined){
            return ''
        }
        else{
            return name.split(' ')[0][0]+name.split(' ')[1][0]
        }
    }
    return(
        <div>
            <div className='h-screen bg-gradient-to-r from-slate-600 to-black'>
                <div className='pt-10 flex pb-5'>
                    <Link href="/">
                    <ChevronLeftIcon className="h-6 w-6"/>
                    </Link>
                    <p className='pl-5 font-semibold text-2xl'>My Account</p>
                </div>
                <div className="relative flex py-5 px-5 bg-slate-700 rounded-2xl border-slate-500 border">
                    <div className="h-28 w-28 bg-white rounded-full">
                        <p className="translate-x-6 translate-y-8 text-5xl text-black">{converter(customer.name)}</p>
                        
                    </div>
                    <div className="flex flex-col justify-center pl-2">
                        <p>{customer.name}</p>
                        <p>{customer.email}</p>
                    </div>
                    <button className=" relative -bottom-12 right-0 text-lg">Edit</button>
                </div>
                <div className="flex flex-col py-5">
                    <div className="flex justify-between py-5 rounded-xl border-slate-500 border bg-slate-700">
                    <p className="text-xl pl-2">Orders</p>
                    <ChevronRightSharp className="h-10 w-10"/>
                    </div>
                    <div className="flex justify-between py-5 rounded-xl border-slate-500 border bg-slate-700">
                    <p className="text-xl pl-2">Edit Addresses</p>
                    <ChevronRightSharp className="h-10 w-10"/>
                    </div>                    
                </div>
            </div>
        </div>
    )
}