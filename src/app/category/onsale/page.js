"use client";
import axios from "axios";
import ItemTray from "../../home/(home)/ItemTray";
import { useEffect, useState } from "react";
import NavBar from "../../navbar/NavBar";
import { apiRoutes } from "../../config";
import Loader from "../../loader";

function bestSellers() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    try {
      axios
        .get(apiRoutes("getallitems"))
        .then((response) => setItems(response.data));
    } catch (err) {
      console.error(err.message);
    }
  });
  useEffect(() => {
    if (items[0]!==undefined) {
      setLoader(false);
    }
  }, [items]);
  const onSale = items.filter((item) => item.sale === true);
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
          <div className="bg-gradient-to-r from-slate-600 to-black opacity-100 z-50 w-full -translate-y-5 fixed">
            <NavBar></NavBar>
          </div>
          <div className="h-full bg-gradient-to-r from-slate-600 to-black pt-16">
            <p className="text-2xl pt-12 text-center font-bold pb-5">
              ITEMS ON SALE
            </p>
            <ItemTray items={onSale}></ItemTray>
          </div>
        </div>
      )}
    </div>
  );
}

export default bestSellers;
