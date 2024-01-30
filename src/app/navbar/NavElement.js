"use client";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TemporaryDrawer from "../cart/page";
import LeftDrawer from "./leftDrawer";
import SearchBar from "./searchBar";

export default function navelement() {
  const [searchToggle, setSearchToggle] = useState(false);
  const [cartnumber, setCartNumber] = useState({ bool: false, value: 0 });
  const [isLoggedIn, setLoggedIn] = useState(false);

  const cart = useSelector(state=>state.cart.list)
  const auth = useSelector(state=>state.auth.login)

  //FUNCTION FOR SEARCH
  function searchHandler() {
    if (searchToggle) {
    } else {
      setSearchToggle(true);
    }
  }
  //EFFECT FOR UPDATING NO OF ITEMS IN CART
  useEffect(() => {
      setCartNumber({ bool: cart.length>0, value: cart.length });
  }, [cart]);

  useEffect(() => {
    setLoggedIn(auth.isLoggedIn);
  }, [auth]);
  return (
    <div>
      <div className="flex h-fit flex-row pt-10 pr-5 md:px-5">
        <div className="md:hidden -translate-y-2">
          <LeftDrawer></LeftDrawer>
        </div>
        <div id="image" className="text-white w-[50%] md:w-2/12">
          <Link href="/ ">
            <h1 className="text-xl font-extrabold">R E L I S H</h1>
          </Link>
        </div>
        <div className="md:flex md:flex-row hidden md:w-4/12">
          <div id="links" className="text-white px-3 hover:text-gray-500">
            <Link href="/">Home</Link>
          </div>
          <div id="links" className="text-white px-3 hover:text-gray-500">
            <Link href="/category">Categories</Link>
          </div>
          <div id="links" className="text-white px-3 hover:text-gray-500">
            <Link href="/category/onsale">Sale</Link>
          </div>
        </div>
        <div className="flex flex-row justify-end w-full">
          <div className="basis-3/5 text-white ">
            {searchToggle && (
              <div className="flex -translate-y-3">
                <SearchBar></SearchBar>
                <button
                  className="w-1/12 -translate-x-7"
                  onClick={() => setSearchToggle(false)}
                >
                  <XMarkIcon className="h-6 w-6 translate-y-1 font-bold" />
                </button>
              </div>
            )}
          </div>
          <div className="md:pr-5">
            <button onClick={() => searchHandler()}>
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="md:px-5 max-h-7">
            <button>
              <TemporaryDrawer></TemporaryDrawer>
            </button>
            {cartnumber.bool && (
              <div className="bg-white h-4 w-4 rounded-full translate-x-4 -translate-y-10">
                <p className=" text-black text-center text-xs font-extrabold">
                  {cartnumber.value}
                </p>
              </div>
            )}
          </div>
          <div className="md:px-5">
            {isLoggedIn ? (
              <div>
                <Link href="/user/profile">
                  <UserCircleIcon className="h-6 w-6" />
                </Link>
              </div>
            ) : (
              <Link href="/user/signup">
                <UserIcon className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
