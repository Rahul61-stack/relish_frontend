"use client";
import axios from "axios";
import ItemTray from "../../home/(home)/ItemTray";
import { useEffect, useState } from "react";
import NavBar from "../../navbar/NavBar";
import { apiRoutes } from "../../config";

function bestSellers() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(apiRoutes("getallitems"))
        .then((response) => setItems(response.data));
    } catch (err) {
      console.error(err.message);
    }
  });
  const onSale = items.filter((item) => item.sale === true);
  return (
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
  );
}

export default bestSellers;
