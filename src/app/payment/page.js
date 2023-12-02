"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { indianStates, paymentType } from "../config";
import { useSelector } from "react-redux";
// import {store} from "../store";
import axios from "axios";
import AddressList from "./addresslist";
import Link from "next/link";

export default function CheckOut() {
  const [showAddressForm, setAddressForm] = useState(false);
  const [confirmmsg, setConfirmMsg] = useState("");
  const customer = useSelector(state=>state.auth.login)
  const [addressError, setAddressError] = useState(false);
  //FUNCTION TO MAKE THE ADDRESS FORM VISIBLE
  function showAddress(value) {
    setAddressForm(value);
  }
  useEffect(()=>{
    console.log(customer)
  },[])
  const [address, setAddress] = useState([
    {
      nickname: "",
      apartment: "",
      landmark: "",
      state: "",
      pincode: "",
    },
  ]);
  const [ptype, setPtype] = useState("");
  //FUNCTION TO SET ADDRESS FIELDS
  function addressHandler(event) {
    const field = event.target.alt;
    const value = event.target.value;
    setAddress({ ...address, [field]: value });
  }
  //FUNCTION TO SET STATE IN ADDRESS
  function stateHandler(event) {
    setAddress({ ...address, state: event.target.value });
  }
  //FUNCTION TO GET THE PAYMENT TYPE
  function paymentHandler(event) {
    setPtype(event.target.value);
  }
  //FUNCTION TO SAVE ADDRESS IN THE DATABASE
  async function saveAddress() {
    if (customer.isLoggedIn) {
      try {
        const response = await axios.patch(
          "http://localhost:5002/customers/" + customer.id,
          address,
        );
        setConfirmMsg(response.data.message);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      setAddressError(true);
    }
  }
  function addressCallback(address,addressList){
    const add = addressList.filter(address=>address.nickname==address)

  }
  //FUNCTION TO SAVE ORDER TO THE DATABSE
  async function orderHandler(address,itemList,customerId){
    
  }
  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-slate-600 to-black">
        <div className="container mx-auto px-6 md:px-16 pt-24">
          <p className="text-center text-3xl pb-4">C H E C K O U T</p>
          <div className="flex flex-col border-2 bg-slate-700 rounded-2xl">
            <div className="flex justify-center pt-4">
              <p className="text-2xl">Select Address</p>
            </div>
            <div className="md:translate-x-40">
              <AddressList address={address} id={confirmmsg} callBack = {addressCallback} />
            </div>
            <div className="flex md:translate-x-44">
              <div className="pl-4 pb-4">
                {showAddressForm ? (
                  <div className="">
                    <button onClick={() => showAddress(false)}>
                      <ChevronUpIcon className="h-7 w-7 translate-y-1 border-2 rounded-full" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => showAddress(true)}>
                      <ChevronDownIcon className="h-7 w-7 translate-y-1 border-2 rounded-full" />
                    </button>
                  </div>
                )}
              </div>
              <div className="translate-y-2">
                <p>Add Address</p>
              </div>
            </div>
            {showAddressForm && (
              <div className="pb-2">
                <div className="pb-4 md:translate-x-44 translate-x-3 rounded-xl">
                  <input
                    className="outline-white w-11/12 md:w-7/12 p-2 bg-slate-600 rounded-xl"
                    placeholder="Nickname"
                    onChange={() => addressHandler(event)}
                    alt="nickname"
                  />
                </div>
                <div className="pb-2 md:translate-x-44 translate-x-3 rounded-xl">
                  <input
                    className="outline-white w-11/12 md:w-7/12 p-2 bg-slate-600 rounded-xl"
                    placeholder="Apartment Name/Locality/Sector"
                    onChange={() => addressHandler(event)}
                    alt="apartment"
                  />
                </div>
                <div className="py-2 md:translate-x-44 translate-x-3">
                  <input
                    className="outline-white w-11/12 md:w-7/12 p-2 bg-slate-600 rounded-xl"
                    placeholder="Landmark"
                    onChange={() => addressHandler(event)}
                    alt="landmark"
                  />
                </div>
                <div className="py-2 flex md:translate-x-40">
                  <div className="">
                    <select
                      className="bg-slate-600 outline-white w-6/12 md:w-8/12 translate-x-3 md:translate-x-4 p-2 rounded-xl"
                      id="stateDropdown"
                      alt="state"
                      value={address.state}
                      onChange={() => stateHandler(event)}
                      placeholder="Select a state"
                    >
                      <option value="">Select a state</option>
                      {indianStates.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input
                      className="outline-white w-11/12 md:w-9/12 p-2 -translate-x-9 bg-slate-600 rounded-xl"
                      placeholder="Pincode"
                      onChange={() => addressHandler(event)}
                      alt="pincode"
                    />
                  </div>
                </div>
                {addressError && (
                  <div className="flex justify-center">
                    <p>
                      Please login to save address!{" "}
                      <Link className="underline" href="/user/login">
                        Click here to login
                      </Link>
                    </p>
                  </div>
                )}
                <div className="flex justify-center">
                  <button
                    className="bg-slate-400 py-2 px-6 rounded-xl"
                    onClick={() => saveAddress()}
                  >
                    Add Address
                  </button>
                </div>
              </div>
            )}
            <div className="border-t-2">
              <p className="text-center text-2xl py-5 ">Payment Method</p>
            </div>
            <div>
              <select
                className="outline-white w-11/12 md:w-7/12 p-2 translate-x-3 md:translate-x-52 bg-slate-600 rounded-xl"
                name="pType"
                value={ptype}
                placeholder="Select Payment type"
                onChange={() => paymentHandler(event)}
              >
                <option value="">Select a payment type</option>
                {paymentType.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center py-5">
              <button className="bg-slate-400 p-4 rounded-xl" onClick={orderHandler}>
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
