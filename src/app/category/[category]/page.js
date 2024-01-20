"use client";
import ItemTray from "../../home/(home)/ItemTray";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NavBar from "../../navbar/NavBar";
import { apiRoutes } from "../../config";
import Loader from "../../loader";

function CatergoryDetails() {
  const params = useParams();
  const category = params.category.replace(/_/g, " ");
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    try {
      axios
        .get(apiRoutes("getallitems"))
        .then((response) => setItems(response.data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    if (items[0] !== undefined) {
      setLoader(false);
    }
  }, [items]);
  const categoryItems = items.filter(
    (item) => item.category === params.category,
  );
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
          <div className="pt-20 h-full bg-gradient-to-r from-slate-600 to-black">
            <p className="text-center font-bold text-2xl py-2">{`Category: ${category}`}</p>
            <ItemTray items={categoryItems}></ItemTray>
          </div>
        </div>
      )}
    </div>
  );
}

export default CatergoryDetails;
