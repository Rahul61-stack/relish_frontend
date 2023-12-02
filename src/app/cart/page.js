"use client";

import * as React from "react";
import SubCart from "./subcart";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const [cart, setCart] = React.useState();
  const [emptyCart, setEmptyCart] = React.useState(true);
  const [subtotal, setSubTotal] = React.useState(0);
  const statetemp = useSelector((state) => state.cart.list);
  const customer = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const msg = "No Items in Cart yet";

  //FUNCTION TO CONVERT NUM TO IND CURRENCY
  function toIndianCurrency(num) {
    const curr = num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return curr;
  }
  //FUNCTION TO TOGGLE OPEN/CLOSES THE CART DRAWER
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  //FUNCTION TO UPDATE THE QUANTITY BASED ON FEEDBACK
  function updateQuantity(id, quantity, bool, price) {
    if (bool) {
      dispatch(cartActions.patchQuantity({ id: id, quantity: quantity + 1 }));
    } else {
      if (quantity - 1 === 0) {
        dispatch(cartActions.removeFromCart({ id: id }));
      } else {
        dispatch(cartActions.patchQuantity({ id: id, quantity: quantity - 1 }));
      }
    }
  }

  //FUNCTION TO MULTIPLY THE PRICE WITH QUANTITY
  function convertToPrice(price, quantity) {
    const value = Number(price.replace(/[^0-9.-]+/g, ""));
    const finalPrice = "₹" + " " + String(value * quantity);
    return finalPrice;
  }
  //FUNCTION TO CONVERT THE PRICE TO AN NUMBER FOR CALCULATION
  function convertToInt(price) {
    const value = Number(price.replace(/[^0-9.-]+/g, ""));
    return value;
  }
  //CHECK IF THE CART IS EMPTY OR NOT AND SET THE TOGGLE FOR DISPLAY
  React.useEffect(() => {
    setCart(statetemp);
    if (statetemp.length == 0) {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }
  }, [statetemp]);

  //EFFECT TO SET THE SUBTOTAL BASED ON THE CART ITEMS
  React.useEffect(() => {
    if (statetemp.length != 0) {
      setSubTotal(caculateSubtotal(statetemp));
    }
  }, [statetemp]);

  //FUNCTION TO CALCULATE THE SUBTOTAL
  function caculateSubtotal(cart) {
    return cart.reduce((total, item) => {
      return total + convertToInt(item.price) * item.quantity;
    }, 0);
  }
  //FUNCTION TO REMOVE ITEMS FROM CART
  function removefromCartHandler(id) {
    dispatch(cartActions.removeFromCart({ id: id }));
  }

  //CODE TO CREATE THE ACTUAL LIST OF CART ITEMS + SUBTOTAL SECTION + PAYMENT BUTTON
  const list = (anchor) => (
    <Box sx={{ width: 350 }} role="presentation">
      <div className="pt-5 bg-slate-700 h-screen">
        <p className="text-3xl font-extrabold text-center text-white relative">
          C A R T
        </p>
        <Button onClick={toggleDrawer(anchor, false)}>
          <ArrowLeftIcon
            className="h-8 w-8 absolute -translate-y-8"
            color="white"
          />
        </Button>
        {emptyCart ? (
          <p className="text-2xl text-center text-white font-semibold">{msg}</p>
        ) : (
          cart.map((item, i) => {
            return (
              <div className="flex py-5 border-b-2 border-black px-2" key={i}>
                <div className="w-20 flex-none">
                  <Image
                    className="pl-1"
                    src={item.imgurl}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="w-48 flex justify-center">
                  <p className="translate-y-1 line-clamp-2 text-white text-sm">
                    {item.name}
                  </p>
                </div>
                <div className="w-44 flex justify-center pl-2">
                  <p className="translate-y-2.5 text-white">
                    {toIndianCurrency(convertToInt(item.price) * item.quantity)}
                  </p>
                </div>
                <div className="w-44 flex justify-center">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity, false, item.price)
                    }
                  >
                    <MinusCircleIcon width={20} height={20} color="white" />
                  </button>
                  <div className="pt-2.5">
                    <p className="text-white px-1">{item.quantity}</p>
                  </div>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity, true, item.price)
                    }
                  >
                    <PlusCircleIcon width={20} height={20} color="white" />
                  </button>
                  <button
                    className="pl-2.5"
                    onClick={() => removefromCartHandler(item.id)}
                  >
                    <TrashIcon width={20} height={20} color="red" />
                  </button>
                </div>
              </div>
            );
          })
        )}
        {emptyCart ? (
          <p></p>
        ) : (
          <div>
            <div className="border-b-2 border-black">
              <SubCart subtotal={subtotal}></SubCart>
            </div>
            {customer.isLoggedIn ? (
              <button className="bg-slate-800 w-full translate-y-5 p-5">
                <Link
                  className="text-white text-center"
                  onClick={toggleDrawer(anchor, false)}
                  href="/payment"
                >
                  Proceed to Checkout
                </Link>
              </button>
            ) : (
              <button className="bg-slate-800 w-full translate-y-5 p-5">
                <Link
                  className="text-white text-center"
                  onClick={toggleDrawer(anchor, false)}
                  href="/user/login"
                >
                  Please login to continue to checkout
                </Link>
              </button>
            )}
          </div>
        )}
      </div>
    </Box>
  );
  return (
    <div>
      {["cart"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ShoppingCartIcon
              className="h-6 w-6 -translate-y-1"
              color="white"
            />
          </Button>
          <Drawer
            anchor="right"
            open={state}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
