"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import {store} from "./store/index"
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>RELISH</title>
      <body className={`${inter.className}`}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
