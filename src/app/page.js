"use client";

import Page from "./home/(home)/page";
import NavBar from './navbar/NavBar'
import { Provider } from "react-redux";
import {store} from "./store";
export default function Home() {
  return (
    <main className="">
      <div className="h-full bg-gradient-to-r from-slate-600 to-black">
        <Provider store={store}>
        <div className="bg-gradient-to-r from-slate-600 to-black opacity-100 z-50 w-full -translate-y-5 fixed">
            <NavBar></NavBar>
          </div>
          <Page />
        </Provider>
      </div>
    </main>
  );
}
