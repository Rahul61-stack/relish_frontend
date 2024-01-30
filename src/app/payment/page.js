"use client"

import { Provider } from 'react-redux';
import CheckoutForm from './checkoutForm'
import ItemDisplay from './itemDisplay'
import { store } from '../store';

function CheckoutPage() {
  return (
    <Provider store={store}>
    <div className="bg-gradient-to-r from-slate-600 to-black h-fit">
      <div className='md:flex'>
      <div className='md:basis-3/5 pb-5'>
        <ItemDisplay></ItemDisplay>
      </div>
      <div className='md:basis-2/5 md:border-l md:border-l-slate-400 md:shadow-md snap-y'>
        <CheckoutForm/>
      </div>
      </div>
    </div>
    </Provider>
   );
}

export default CheckoutPage;