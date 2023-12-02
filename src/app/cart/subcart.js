import Link from "next/link";
import { useEffect,useState } from "react";

export default function SubCart(props) {
  const [gst,setGst] = useState(0)
  const [total,setTotal] = useState(0)

  //FUNCTION TO CONVERT NUM TO IND CURRENCY
  function toIndianCurrency(num) {
    const curr = num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return curr;
  }
  //USE EFFECTS TO SET THE SUBTOTAL GST AND TOTAL
  useEffect(()=>{
    setGst((props.subtotal*18)/100)
  },[props.subtotal])
  useEffect(()=>{
    setTotal(props.subtotal+gst)
  },[gst])
  return (
    <div className="w-full bg-slate-500 ">
      <div>
        <p className="text-center text-2xl py-2 border-b-2 border-black text-white">
          Order Details
        </p>
      </div>
      <div className="flex flex-col font-semibold border-black text-white">
        <div className="flex justify-between p-2">
          <div>
            <p className="">Cart Total</p>
          </div>
          <div>
            <p className="">{toIndianCurrency(props.subtotal)}</p>
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div>
            <p className="">GST</p>
          </div>
          <div>
            <p className="">{toIndianCurrency(gst)}</p>
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div>
            <p className="">Deliery Fee</p>
          </div>
          <div>
            <p className="">Free</p>
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div>
            <p className="">Grand Total</p>
          </div>
          <div>
            <p className="">{toIndianCurrency(total)}</p>
          </div>
        </div>
        <div className="p-2">
          <div>
            <Link href="#">Refund Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
