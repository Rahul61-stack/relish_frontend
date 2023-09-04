'use client'

import Axios from "axios";
import { checkEmail , rootURL } from "./config"
const { useState } = require("react")

export default function signup(props){
    const [email,setEmail] = useState('');
    const [showError,setError] = useState(false)
    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    const submitHandler = () =>{
        console.log("yes")
        const data = {"email":email}
        Axios.get(checkEmail,data).then(
            response=> response.data = [] ? setError(false):setError()
        )
        
    }
    return(
        <div>
            <div className="flex h-screen w-full items-center justify-center  bg-cover bg-no-repeat">
                <div clasName="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                        <div className="mb-8 flex flex-col items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LvHCi9enZipB3caYb8e3VG4N3DOS4SvLVoiT8KfarA&s" width="150" alt="" srcset="" />
                        <span className="text-black font-bold">Please enter your details to Signup</span>
                    </div>
                        <div className="mb-4 text-lg">
                            <input className="rounded-3xl border-solid bg-white-400 bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="Email" 
                            onChange={emailHandler}/>
                        <div className="flex flex-col items-center">
                    </div>  
                </div>
                    <div className="mt-8 flex justify-center text-lg text-black">
                        <button type="submit" className="rounded-3xl bg-gray-400 bg-opacity-100 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                        onClick={submitHandler}
                        >Signup</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}