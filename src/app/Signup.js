'use client'

import Axios from "axios";
import { getCustomer } from "./config"
const { useState, useEffect } = require("react")

export default function signup(props){
    const [email,setEmail] = useState('');
    const [showError,setError] = useState(false)
    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    
    const submitHandler = () =>{
        const data = {"email":email}
        Axios.post(getCustomer,data).then(
            response=> response.data === "Exists" ? setError(true):setError(false)
        )
        console.log(showError)
    }
    useEffect(()=>{
        if(showError){
            console.log("navigate to login")
        }
        else{
            console.log("navigate to signup")
        }
    },[showError])
    return(
        <div>
            <div className="grid grid-rows-3 grid-flow-col gap-4 content-stretch">
                <div className="row-span-3 col-span-2 bg-black"></div>
                <div className="row-span-3 col-span-1">
                    <div className="py-20 pl-40 px-60">
                        <div className="flex justify-center flex-col gap-10  content-center"> 
                            <div className="flex justify-center">
                                <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LvHCi9enZipB3caYb8e3VG4N3DOS4SvLVoiT8KfarA&s"></img>
                            </div>
                            <div className="flex justify-center">
                                <input className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="email" placeholder="Email" onChange={emailHandler}/>
                            </div>
                            <div className="flex justify-center">
                                <button className="text-white" type="submit" onClick={submitHandler}>
                                    Signup
                                </button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
                
        </div>
         
    )
}