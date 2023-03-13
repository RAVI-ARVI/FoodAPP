import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
   initialState:{
    items:[]
   },
   reducers:{
    addItem:(state,action)=>{
       console.log(state.items,"this is ")
        state.items.push(action.payload)
    },
    removeItem:(state,action)=>{
      
        state.items.filter((item)=>item.id !== action.payload.id)
    },
    cleateItem:(state)=>{
        state.items=[]
    }
   }
});

export const {addItem,cleateItem,removeItem}=cartSlice.actions
export default cartSlice.reducer