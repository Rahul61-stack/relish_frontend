"use client";
import Link from "next/link";
import { useEffect } from "react";
import NavBar from "../navbar/NavBar";
export default function Page() {
  const imgsrc = {
    Laptops_and_Mobiles: "/IMG/AKA8518.jpg",
    Electronics: "/IMG/triyansh-gill-DYDIF2OuavM-unsplash.jpg",
    Footwear: "/IMG/fT1S2YI24fwO76XiRbrtLRKSFbrAU63fKkTOKwCT.jpg",
  };
  function divStyle(url) {
    const divstyle = {
      backgroundImage: `url(${url})`,
      backgroundSize: "cover",
      backgroundOpacity: "60%",
    };
    return divstyle;
  }
  useEffect(() => {
    Object.entries(imgsrc).map((item) => {});
  });
  return (
    <div>
      <div className="bg-gradient-to-r from-slate-600 to-black opacity-100 z-50 w-full -translate-y-5 fixed">
        <NavBar></NavBar>
      </div>
      <div className="pt-10 h-full bg-gradient-to-r from-slate-600 to-black">
        <div className="flex flex-col h-screen content-around justify-around pt-10">
          {Object.entries(imgsrc).map((image, i) => {
            return (
              <div
                key={i}
                className="flex justify-center rounded-xl py-20 bg-center bg-opacity-50"
                style={divStyle(image[1])}
              >
                <Link href={{ pathname: `/category/${image[0]}` }}>
                  <p className="z-20 text-white rounded-xl p-4 bg-slate-600 bg-opacity-50 font-bold text-xl">
                    {image[0].replace(/_/g, " ")}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
