'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './navbar/NavBar'
import { Provider } from 'react-redux'
import store from './store'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <title>RELISH</title>
      <body className={`${inter.className}`}>
        <div className= 'bg-gradient-to-r from-slate-600 to-black opacity-100 z-50 w-full -translate-y-5 fixed'>
          <NavBar/>
        </div>
        {children}
      </body>
    </html>
    </Provider>
    
  )
}
