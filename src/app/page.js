'use client';

import { Provider } from 'react-redux';
import HomePage from './home/HomePage';
import store from './store';
export default function Home() {
  return (
    <Provider store={store}>
      <main className=''>
        <div className='h-full bg-gradient-to-r from-slate-600 to-black'>
        <HomePage/>
        </div>
      </main>
    </Provider>

  )
}
