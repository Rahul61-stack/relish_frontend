"use client";
import { Provider } from "react-redux";
import {store} from "../store/index"

export default function CheckoutLayout({ children }) {
  return (
    <div>
        <Provider store={store}>
              {children}
        </Provider>
    </div>
  );
}
