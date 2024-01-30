import Image from "next/image";
import Link from "next/link";
import Rating from "../../starrating";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store";
import { useEffect, useMemo } from "react";

function ItemTrayItem({ items, onAddtoCart }) {
  return (
    <div className="md:pl-20 translate-x-3 flex flex-row py-5 w-screen border-y-2 border-y-slate-700">
      <div className="md:basis-1/6 basis-2/6 flex-none bg-white rounded-xl p-2 ">
        <Link href={{ pathname: `/home/${items._id}` }}>
          <Image
            src={items.imgurl}
            width={300}
            height={300}
            alt="Image"
            className="h-25"
          />
        </Link>
      </div>
      <div className="md:px-20 px-5">
        <Link href={{ pathname: `/home/${items._id}` }}>
          <p className="md:text-2xl text-base font-bold md:pb-3 pb-1">
            {items.name}
          </p>
        </Link>
        <p className="line-clamp-2 text-xs">{items.description}</p>
        <div className="md:py-4 py-2">
          <Rating rating={items.rating}></Rating>
        </div>
        {items.sale ? (
          <div className="flex">
            <p className="font-bold text-xs pb-2 md:text-xl line-through">
              {items.price}
            </p>
            <p className="font-bold text-xs pl-5 pb-2 md:text-xl">
              {toIndianCurrency(Number(items.price.replace(/[^0-9.-]+/g, "")))}
            </p>
          </div>
        ) : (
          <p className="font-bold text-xs pb-2 md:text-xl">{items.price}</p>
        )}
        <button
          onClick={() =>
            onAddtoCart(
              items._id,
              items.name,
              items.price,
              items.imgurl,
              items.sale,
            )
          }
          className="text-xs md:text-base"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
//FUNCTIONS TO CALCULATE THE DISCOUNT ON THE ITEM -START
function discount(price) {
  return price - (price * 20) / 100;
}
function toIndianCurrency(num) {
  const curr = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return curr;
}
//FUNCTIONS TO CACULATE THE DISCOUNT -END

export default function ItemTray(props) {
  const cart = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  //FUNCTION FOR ADDING ITEMS TO CART
  function cartHandler(id, name, price, url, sale) {
    const existingItem = cart.filter((item) => item.id === id);
    //ADDING NEW ITEM
    if (existingItem[0] === undefined) {
      if (sale) {
        dispatch(
          cartActions.addToCart({
            id: id,
            name: name,
            price: toIndianCurrency(
              discount(Number(price.replace(/[^0-9.-]+/g, ""))),
            ),
            imgurl: url,
          }),
        );
      } else {
        dispatch(
          cartActions.addToCart({
            id: id,
            name: name,
            price: price,
            imgurl: url,
          }),
        );
      }
    }
    //UPDATING THE QUANTITY OF EXISTITNG ITEM
    else {
      dispatch(
        cartActions.patchQuantity({
          id: id,
          quantity: existingItem[0].quantity + 1,
        }),
      );
    }
  }
  const memoizedItems = useMemo(() => props.items, [props.items]);

  return (
    <div className="h-full">
      <div className="flex-col flex-wrap justify-center">
        {memoizedItems.map((items, i) => {
          return (
            <ItemTrayItem key={i} items={items} onAddtoCart={cartHandler} />
          );
        })}
      </div>
    </div>
  );
}
