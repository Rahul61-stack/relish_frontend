import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { list:[] },
  reducers: {
    addToCart(state, action) {
      state.list = [
        ...state.list,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          imgurl: action.payload.imgurl,
          quantity: 1,
        },
      ];
    },

    removeFromCart(state, action) {
      state.list = state.list.filter((state) => state.id !== action.payload.id);
    },
    patchQuantity(state, action) {
      state.list = state.list.map((item) =>
        item.id == action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );
    },
  },
});
export default cartSlice;
