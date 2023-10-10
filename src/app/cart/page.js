import Image from "next/image"
export default function Cart(){
    return(
        <div className="w-fit h-full translate-x-1/2  bg-gradient-to-r from-slate-600 to-black pt-10 text-white rounded-2xl">
            <p className="text-5xl font-extrabold text-center">CART</p>
            <div className="flex">
                <div className="">
                
                </div>
                <div className="flex justify-end border rounded-2xl pl-2 pt-2">
                    <div className="flex-col text-2xl">
                        <p>SUBTOTALS</p>
                        <p>GST</p>
                        <p>TOTAL</p>
                        <p>Checkout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}