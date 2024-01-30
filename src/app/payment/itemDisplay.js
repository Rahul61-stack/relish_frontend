import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import Image from "next/image";

function ItemDisplay() {
  const cartItems = useSelector((state) => state.cart.list);
  console.log(cartItems);

  return (
    <div>
      <div className="pt-10 pl-5 flex justify-start w-50">
        <div className="border-b">
          <ShoppingBagIcon className="md:h-10 md:w-10 h-8 w-8"></ShoppingBagIcon>
        </div>
        <div className="pb-5 border-b w-[80%]">
          <p className="pl-3 md:text-4xl text-xl font-bold">BAG</p>
        </div>
      </div>
      <div className="pl-5 pt-5 md:text-2xl text-xl">
        <p>TOTAL AMOUNT IN LARGE</p>
      </div>
      <div className="flex-col w-[80%] pl-8 pt-5">
        {cartItems.map((item)=>{
            return(
                <div className="flex justify-start py-2">
                    <div className="">
                        <Image src={item.imgurl} width={50} height={50} className="rounded-xl"/>
                    </div>
                    <div className="flex-col w-[50%] pl-5">
                        <div>
                            <p className="line-clamp-1">{item.name}</p>
                        </div>
                        <div className="">
                            <p>Qty:{item.quantity}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                    <div className="flex">
                        <p>{item.price}</p>
                    </div>
                    </div>
                </div>
            );
        })}
      </div>
    </div>
  );
}

export default ItemDisplay;
