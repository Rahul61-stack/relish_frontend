"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../../navbar/NavBar";
import Rating from "../../starrating"
import { useDispatch, useSelector } from "react-redux";
import {cartActions} from "../../store/index"

export default function Page() {
  const params = useParams();
  const [item, setItem] = useState([]);
  const [dorr, setDorr] = useState(true);
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)

  //FUNCTION TO ADD ITEM TO CART OR UPDATE THE EXISITNG ITEMS
  function cartHandler(id, name, price, url,sale) {
    const existingItem = cart.filter((item) => item.id === id)
    //ADDING NEW ITEM
    if (existingItem[0] === undefined) {
      if(sale){
        dispatch(cartActions.addToCart({id:id,name:name,price:toIndianCurrency(convertToInt(price)),imgurl:url}))
      }
      else{
        dispatch(cartActions.addToCart({id:id,name:name,price:price,imgurl:url}))
      }
    }
    //UPDATING THE QUANTITY OF EXISTITNG ITEM
    else {
      dispatch(cartActions.patchQuantity({id:id,quantity:existingItem[0].quantity+1}))
    }
  }

  //FUNCTION TO GET THE ITEM WITH ID
  useEffect(() => {
    const getItem = 'http://localhost:5002/items/' + params._id
    axios.get(getItem).then((response) => setItem(response.data))
  }, []);

  //FUNCTIONS TO CALCULATE DISCOUNT ON THE PRICE(IF ANY) -START
  function convertToInt(price) {
    const value = Number(price.replace(/[^0-9.-]+/g, ""));
    return discount(value)
  }
  function discount(price){
    return price - (price*20)/100
  }
  function toIndianCurrency(num) {
    const curr = num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return curr;
  }
  //FUNCTIONS TO CALCULATE THE DISCOUNT ON THE PRICE -END
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-600 to-black opacity-100 z-50 w-full -translate-y-5 fixed">
            <NavBar></NavBar>
          </div>
       <div className="md:h-screen h-screen w-screen bg-gradient-to-r from-slate-600 to-black pt-20">
      <div className="md:container md:w-4/5 md:h-fit md:mx-auto md:top-6 bg-to-r from-slate-400 to-slate-900 md:pb-10 rounded-2xl">
        <div className="md:flex md:flex-row flex flex-col">
          <div className="md:flex-none flex-none md:px-40 md:pt-20 px-20">
            <Image
              alt={item.name}
              src={item.imgurl}
              height={300}
              width={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:px-10 pt-10 md:pt-20">
            <p className="md:text-4xl md:text-start text-center text-2xl pb-2">
              {item.name}
            </p>
            <div className="flex">
              <starrating rating={item.rating} />
            </div>
            {item.sale ? (
                  <div className="flex justify-center">
                  <p className="font-bold text-sm pb-2 text-center md:text-xl line-through">
                    {item.price}
                  </p>
                  <p className="font-bold text-center text-sm pl-2 md:pl-5 pb-2 md:text-xl">
                    {(toIndianCurrency(convertToInt(item.price)))} & Free Shipping
                  </p>
                  </div>
                ) : (
                  <p className="font-bold text-xs text-center pb-2 md:text-xl">
                    {item.price} & Free Shipping
                  </p>
                )}
            {/* ADD CODE FOR RATING */}
                <div className="flex justify-center">
                      <Rating rating={item.rating}></Rating>
                </div>
            {/* CODE FOR ADD TO CART IN BIGGER SCREENS */}
            <div className="md:py-2 md:block hidden">
              <button
                onClick={() =>
                  cartHandler(item._id, item.name, item.price, item.imgurl)
                }
                className="md:translate-x-10 md:translate-y-10 p-2 bg-slate-200 font-semibold text-black rounded-lg"
              >
                ADD TO CART
              </button>
            </div>

            {/* CODE FOR ADD TO CART IN MOBILE DEVICES */}
            <div className="md:hidden py-5">
              <button className="translate-x-36 p-2 bg-slate-200 font-semibold text-black rounded-lg"
                      onClick={() =>
                        cartHandler(item._id, item.name, item.price, item.imgurl, item.sale)
                      }>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:translate-y-5 md:translate-x-40 md:w-4/5 border-t-2 border-b-2 md:text-xl">
          <div className="">
            <button
              onClick={() => setDorr(true)}
              className={`h-12 ${
                dorr ? "font-bold md:pl-0 pl-3" : "pl-3"
              }`}
            >
              Description
            </button>
          </div>
          <div>
            <button
              onClick={() => setDorr(false)}
              className={`md:translate-x-10 md:pl-0 pl-5 h-12 ${
                !dorr ? "font-bold" : ""
              }`}
            >
              Reviews
            </button>
          </div>
        </div>
        <div className="md:translate-x-40 w-full md:w-4/5 md:pt-10 p-5">
          {dorr ? (
            <p>{item.description}</p>
          ) : (
            Object.entries(item.reviews).map((rev, i) => {
              return (
                <div
                  className="flex flex-col w-full border-b-2 bg-gradient-to-r from-slate-400 to-slate-900 md:p-3 rounded-xl"
                  key={i}
                >
                  <div className="md:py-2 p-2">
                    <p className="text-lg text-slate-800 font-semibold">
                      {rev[0]}
                    </p>
                  </div>
                  <div className="h-fit py-2 bg-slate-100 bg-opacity-30 rounded-2xl">
                    <p className="text-white pl-2">{rev[1]}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
