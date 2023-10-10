'use client'

import { addCustomer } from "@/app/config"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Signup(){
    const [customer,setCustomer] = useState({name:'',email:'',password:'',cnfpassword:''})
    const [showerror,setError] = useState({name:false,email:false,password:false,cnfpassword:false})
    const [button,setButton] = useState(false)
    function customerHandler(event){
        let value = event.target.value;
        let field = event.target.alt;
        setCustomer({...customer,[field]:value})
        emptyHandler(value,field)
    }
    //FUNCTION TO ADD CUSTOMER TO DATABASE
    function signupHandler(){
        let data;
        data = {email:customer.email,name:customer.name}
        axios.post(addCustomer,data).then(
            response => console.log(response)
        )
    }
    //ERROR HANDLING FOR NULL EXCEPTION
    function emptyHandler(value,field){
        value==='' ? setError({...showerror,[field]:true}):setError({...showerror,[field]:false})
        console.log(value,field)
        console.log(showerror)
    }
    //ERROR HANDLING FOR PASSWORD VERIFICATION
    function passwordHandler(){
        customer.password===customer.cnfpassword?setError({...showerror,cnfpassword:false}):setError({...showerror,cnfpassword:true})
    }
    //FOR ENABLING/DISABLING THE SUBMIT BUTTON
    useEffect(()=>{
        setButton(Object.values(showerror).every(value=>value===true?false:true))
        console.log(button)
    },[showerror])
    useEffect(()=>{
        passwordHandler()
    },[customer.cnfpassword])
    return(
        <div className="h-screen bg-gradient-to-r from-slate-600 to-black">
            <div className="flex flex-col border-cyan-500">
                <div className="flex justify-center pt-20">
                    <h1 className="text-5xl">R E L I S H</h1>
                </div>
                <div className="flex justify-center pt-10 pb-5">
                    <label className="px-5">Name</label>
                </div>
                    <div className="flex justify-center pb-5">
                    <input className={`bg-gray-500 outline-none rounded-lg px-2 py-2 w-2/12 ${ showerror.name ? "outline-rose-600":""} `} placeholder={`${showerror.name ? "Name can't be blank":"Enter your Name"}`} onChange={customerHandler} alt="name"/>
                </div>
                <div className="flex justify-center pb-5">
                    <label className="px-5">Email</label>
                </div>
                    <div className="flex justify-center pb-5">
                    <input className={`bg-gray-500 outline-none rounded-lg px-2 py-2 w-2/12 ${ showerror.email ? "outline-rose-600":""} `} placeholder={`${showerror.email ? "Email can't be blank":"Enter your Email"}`} 
                    onChange={customerHandler} alt="email"/>
                </div>
                <div className="flex justify-center pb-5">
                    <label className="px-5">Password</label>
                </div>
                <div className="flex justify-center pb-5">
                    <input className={`bg-gray-500 outline-none rounded-lg px-2 py-2 w-2/12 ${ showerror.password ? "outline-rose-600":""} `} placeholder={`${showerror.password ? "Password can't be blank":"Enter your Password"}`} onChange={customerHandler} alt="password"/>
                </div>
                <div className="flex justify-center pb-5">
                    <label className="px-5">Confirm Password</label>
                </div>
                <div className="flex justify-center pb-5">
                    <input className={`bg-gray-500 outline-none rounded-lg px-2 py-2 w-2/12 ${ showerror.cnfpassword ? "outline-rose-600":""} `} placeholder={`${showerror.cnfpassword ? "Passwords do not match":"Confirm Password"}`} onChange={customerHandler} alt="cnfpassword"/>
                </div>
                <div className="flex justify-center pb-5">
                    <button className={`rounded-lg bg-black p-2 hover:bg-slate-600 ease-in-out duration-200`} disabled={!button} onClick={signupHandler}>
                        Signup
                    </button>
                </div>
            </div>
        </div>
    )
}