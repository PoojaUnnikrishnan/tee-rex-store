import React, { useEffect } from 'react'
import { defaultCss } from './defaultCss'

export const Cart = ({ cart }) => {
    useEffect(() => {
        console.log("Cart component mounted. Cart:", cart);
    }, []);

    useEffect(() => {
        console.log("Cart updated in Cart component:", cart);
    }, [cart]);

    return (
        <div className={`${defaultCss.defaultFontFamily}`}>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <p>Items in cart: {cart.length}</p>
            {cart.map((item, index) => (
                <div key={index} className='shadow w-full md:w-3/4 p-4 my-4 flex justify-between'>
                    <div className='flex justify-between w-1/2'>
                        <div className='text-base'>
                            <h2 className='font-bold'>{item.name}</h2>
                            <div className=''>Price: ${item.price}</div>
                            <button>Quantity</button>
                        </div>
                    </div>
                    <img src={item.imageURL} alt={item.name} className='w-14 h-14' />

                </div>
            ))}
        </div>
    )
}