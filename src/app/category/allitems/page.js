"use client";
import axios from "axios";
import ItemTray from "../../home/(home)/ItemTray";
import { useEffect, useState } from "react";
import NavBar from "../../navbar/NavBar";

function bestSellers() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:5002/items/getall")
        .then((response) => setItems(response.data));
    } catch (err) {
      console.error(err.message);
    }
  });
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-600 to-black opacity-100 z-50 w-full -translate-y-5 fixed">
        <NavBar></NavBar>
      </div>
      <div className="h-full bg-gradient-to-r from-slate-600 to-black pt-16">
        <p className="text-2xl pt-12 text-center font-bold pb-5">
          ALL ITEMS
          </p>
        <ItemTray items={items}></ItemTray>
      </div>
    </div>
  );
}

export default bestSellers;
