"use client";
import ItemTray from "./ItemTray";
import Display from "./Display";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { apiRoutes } from "../../config";
import Loader from "../../loader";

export default function Page() {
  console.time("start");
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  //TO GET ITEMS FROM MONGO
  if (loader === true) {
    try {
      axios
        .get(apiRoutes("getallitems"))
        .then((response) => setItems(response.data));
      console.log("AFter items");
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    if(items[0]!=undefined){
      setLoader(false)
    }
  },[items])
  //SETTING THE PREVIEW OF BEST SELLERS AND ITEMS ON SALE
  const bestSellers = items.filter((item) => item.rating > 4).slice(0, 3);
  const saleItems = items.filter((item) => item.sale === true).slice(0, 3);
  console.log("YES");
  console.timeEnd("start");
  return (
    <div>
      {loader ? (
        <div className="h-screen bg-gradient-to-r from-slate-600 to-black">
        <div className="z-100 w-40 h-40 container mx-auto pt-40 relative">
          <Loader />
          <p className="font-bold translate-x-10 -translate-y-24">
            Loading...
          </p>
        </div>
        </div>
      ) : (
        <div>
          <div className={`relative`}>
            <Display></Display>
            <div className="flex justify-center text-3xl py-10">
              <p className="md:text-4xl text-2xl font-bold">
                Our Best Sellers
                <Link className="text-sm pl-2" href="/category/bestsellers">
                  View all best sellers
                </Link>
              </p>
              <ChevronDoubleRightIcon
                className="translate-y-3 md:translate-y-5"
                width={15}
                height={15}
              />
            </div>
            <ItemTray items={bestSellers}></ItemTray>
            <div className="flex justify-center text-3xl py-10">
              <p className="md:text-4xl text-2xl font-bold">
                Items on Sale
                <Link className="text-sm pl-5" href="/category/onsale">
                  View all items on sale
                </Link>
              </p>
              <ChevronDoubleRightIcon
                className="translate-y-3 md:translate-y-5"
                width={15}
                height={15}
              />
            </div>
            <ItemTray items={saleItems}></ItemTray>
          </div>
        </div>
      )}
    </div>
  );
}
//no page.js created for this since this is the default page of the website
