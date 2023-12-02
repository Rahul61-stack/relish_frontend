"use client";
import ItemTray from "../../home/(home)/ItemTray";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NavBar from "../../navbar/NavBar";

function CatergoryDetails() {
  const params = useParams();
  const category = params.category.replace(/_/g, " ");
  const [items, setItems] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:5002/items/getall")
        .then((response) => setItems(response.data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  const categoryItems = items.filter(
    (item) => item.category === params.category,
  );
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-600 to-black opacity-100 z-50 w-full -translate-y-5 fixed">
        <NavBar></NavBar>
      </div>
      <div className="pt-20 h-full bg-gradient-to-r from-slate-600 to-black">
        <p className="text-center font-bold text-2xl py-2">{`Category: ${category}`}</p>
        <ItemTray items={categoryItems}></ItemTray>
      </div>
    </div>
  );
}

export default CatergoryDetails;
