import React from 'react'
import {useSelector} from 'react-redux'
import CartItems from './CartItems'

function Cart() {
    const items=useSelector((store)=>store.cart.items)
    console.log(items,"this items at the cart")
  return (
    <div>
      {items?.map((item)=><CartItems {...item} key={item.id}   />)}
    </div>
  )
}

export default Cart
