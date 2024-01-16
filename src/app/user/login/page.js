"use client";
import { useEffect, useState } from "react";
import axios from "axios";
// import {store} from "../../store";
import { Link, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { apiRoutes } from "../../config";

export default function Login() {
  const [customer, setCustomer] = useState({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useDispatch()
  //UPDATE CUSTOMER LOGIN VALUES
  function customerHandler(event) {
    const value = event.target.value;
    const field = event.target.alt;
    setCustomer({ ...customer, [field]: value });
  }
  //FUNCTION TO VALIDATE THE USER(EMAIL+PASSWORD VERIFICATION)
  async function loginHandler() {
    try {
      const response = await axios.post(
        apiRoutes("loginvalidation"),
        customer,
      );
      dispatch(authActions.login({id:response.data.id}))
      router.push("/");
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className="h-screen bg-gradient-to-r from-slate-600 to-black">
      <div className="">
        <div className="text-center pt-40 text-4xl font-bold">R E L I S H</div>
        <div className="flex flex-col">
          <div className="flex justify-center py-5">
            <label>EMAIL ID</label>
          </div>
          <div className="flex justify-center pb-5">
            <input
              type="email"
              onChange={customerHandler}
              alt="email"
              className="bg-gray-500 outline-none rounded-lg px-2 py-2 md:w-3/12 w-8/12"
              placeholder="Enter your Email-ID"
            />
          </div>
          <div className="flex justify-center py-5">
            <label>PASSWORD</label>
          </div>
          <div className="flex justify-center">
            <input
              type="password"
              onChange={customerHandler}
              alt="password"
              className="bg-gray-500 outline-none rounded-lg px-2 py-2 md:w-3/12 w-8/12"
              placeholder="Enter your Password"
            />
          </div>
          <div className="flex justify-center py-10">
            <button onClick={loginHandler}>LOG IN</button>
          </div>
          <div className="flex justify-center py-7">
            <p>
              Not registered with us?
              <a className="underline pl-1" href="/user/signup">
                Click here to Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
