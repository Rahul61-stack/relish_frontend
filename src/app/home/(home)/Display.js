import Image from "next/image";
import Carousel from "./carousel";
import Link from "next/navigation";
export default function Display() {
  return (
    <div>
      <div>
        <Carousel className="relative"></Carousel>
      </div>
      <div className="absolute top-24 left-32 w-fit h-fit bg-black bg-opacity-10 rounded-2xl">
        <p className="text-slate-800 text-xl font-bold px-4 align-bottom tracking-widest">
          Explore by Category
        </p>
      </div>
    </div>
  );
}

