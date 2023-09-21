'use client'

import { addCustomer } from "@/app/config"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Signup(){
    const [customer,setCustomer] = useState({name:'',email:'',password:'',cnfpassword:''})
    const [showerror,setError] = useState({name:false,email:false,password:false,cnfpassword:false})
    function customerHandler(event){
        
        console.log(event)
        
        
    }
    function signupHandler(){
        axios.post(addCustomer,[]).then(
            response => console.log(response)
        )
    }
    useEffect(()=>{
        if (customer.name===''){
            setError({...showerror,name:true})
        }
        if (customer.email===''){
            setError({...showerror,email:true})
        }
        if (customer.password===''){
            setError({...showerror,password:true})
        }
        if (customer.password!==customer.cnfpassword){
            setError({...showerror,cnfpassword:true})
        }
    },[customer])
    return(
        <div>
            <div className="flex flex-col">
                <div className="flex justify-center pt-40">
                    <h1 className="text-5xl">R E L I S H</h1>
                </div>
                <div className="flex justify-center pt-10 pb-5">
                    <label className="px-5">Name</label>
                </div>
                    <div className="flex justify-center pb-5">
                    <input className={`bg-gray-500 rounded-lg px-2 py-2 w-3/12 ${ showerror.name ? "outline-rose-600":""} `} placeholder="ENTER YOUR NAME" onChange={customerHandler} name="name"/>
                </div>
                <div className="flex justify-center pb-5">
                    <label className="px-5">Email</label>
                </div>
                    <div className="flex justify-center pb-5">
                    <input className="bg-gray-500 rounded-lg px-2 py-2 w-3/12" placeholder="ENTER YOUR EMAIL" onChange={customerHandler} name="email"/>
                </div>
                <div className="flex justify-center pb-5">
                    <label className="px-5">Password</label>
                </div>
                <div className="flex justify-center pb-5">
                    <input className="bg-gray-500 rounded-lg px-2 py-2 w-3/12" placeholder="ENTER YOUR PASSWORD" onChange={customerHandler} name="password"/>
                </div>
                <div className="flex justify-center pb-5">
                    <label className="px-5">Confirm Password</label>
                </div>
                <div className="flex justify-center pb-5">
                    <input className="bg-gray-500 rounded-lg px-2 py-2 w-3/12" placeholder="CONFIRM YOUR PASSWORD" onChange={customerHandler} name="cnfpassword"/>
                </div>
                <div className="flex justify-center pb-5">
                    <button className="rounded-lg bg-gradient-to-t" onClick={signupHandler}>
                        Signup
                    </button>
                </div>
            </div>
        </div>
    )
}