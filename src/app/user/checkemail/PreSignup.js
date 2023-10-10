'use client'

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import Axios from "axios";
import { getCustomer } from "../../config"
import Link from "next/link";
import { useRouter } from "next/navigation";
const { useState } = require("react")

export default function signup(props){
    const router = useRouter()
    const [email,setEmail] = useState('');
    const [showError,setError] = useState(false)
    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    //FUNCTION TO CHECK WHETHER EMAIL ALREADY EXISTS ON THE DATABASE
    const submitHandler = () =>{
        const data = {"email":email}
        Axios.post(getCustomer,data).then(
            response=> response.data === "Exists" ? setError(true):setError(false)
        )
        if(showError===true){
            router.push('/user/signup')
        }
    }
    
    return(
        <div className="h-screen bg-gradient-to-r from-slate-600 to-black">
            <div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center pt-60">
                        <h1 className="text-5xl">R E L I S H</h1>
                    </div>
                    <div className="flex justify-center py-7">
                        <p className="text-sm">Let's check if you're already registered with us</p>
                    </div>
                    <div className="relative flex justify-center py-7 pl-10">
                        {showError&&
                            <div className="absolute inset-y-0 flex justify-center py-7 pl-48">
                                <CheckCircleIcon color="green" className="h-8 w-8"/> 
                            </div>}
                        <input type="text" placeholder="Enter your email"onChange={emailHandler} className="w-1/5 pl-5 text-black rounded-lg hover:shadow-white hover:shadow ring-0 border-0" />
                        <button className="pl-3" onClick={submitHandler}>
                            <MagnifyingGlassCircleIcon className="h-10 w-10"/>
                        </button>
                    </div>
                    {showError&&
                    <div className="flex justify-center py-7">
                        <p className="bg-gray-500 px-3 rounded-lg py-1">You are already registered with us!</p>
                    </div>}
                    
                    {showError&&<div className="flex justify-center gap-5 py-7">
                            <Link href="/user/signup" className="px-3 bg-gray-500 rounded-lg py-1">Sign up with a new account</Link>
                            <button className="px-3 bg-gray-500 rounded-lg py-1">Log in using exisiting account</button>
                    </div>}
                </div>
            </div>
        </div>
         
    )
}