import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { cleateItem} from "../../Utils/cartSlice";
import CartItems from './CartItems';

function Cart() {
    const items=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleRemoveItems=()=>{
      dispatch(cleateItem())
    }
  return (
    <div>
    <button className=" text-red-500 font-semibold bg-white p-2 rounded-md m-3" onClick={()=>handleRemoveItems()}>
          Cleare All
        </button>
      {items?.map((item)=><CartItems {...item} key={item.id}   />)}
    </div>
  )
}

export default Cart
