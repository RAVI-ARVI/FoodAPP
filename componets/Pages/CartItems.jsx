import React from "react";
import {useDispatch} from 'react-redux'
import { addItem, removeItem } from "../../Utils/cartSlice";

function CartItems(data) {
  const { cloudinaryImageId, category, name, price, defaultPrice }=data
const dispatch=useDispatch()
  const handleAddItem=(data)=>{
  
   dispatch(addItem(data))
  }
  const handleRemoveItem=(data)=>{
dispatch(removeItem(data))
  }
  if (!price & !defaultPrice) return;
  return (
    <div className="w-3/4 p-3  shadow-lg mx-auto my-5 flex justify-between  ">
      <div>
        <h3 className="name">{name}</h3>
        <h2>{category}</h2>
        <h5>{price ? price / 100 : defaultPrice / 100}</h5>
      </div>
      <div className="relative">
        {cloudinaryImageId ? (
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
            className="w-48 "
          />
        ) : (
          <div className="w-48"></div>
        )}

        <button className="absolute bottom-2 left-2 text-green-600 font-semibold bg-white p-2 rounded-md hover:bg-green-300" onClick={()=>handleAddItem(data)}>
          ADD +
        </button>
        <button className="absolute bottom-2 right-1 text-red-500 font-semibold bg-white p-2 rounded-md hover:bg-green-300" onClick={()=>handleRemoveItem(data)}>
          Remove +
        </button>
      </div>
    </div>
  );
}

export default CartItems;