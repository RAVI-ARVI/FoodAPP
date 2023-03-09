import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
   initialState:{
    items:["one","two"]
   },
   reducers:{
    addItem:(state,action)=>{
        state.item.push(action.payload)
    },
    removeItem:(state,action)=>{
        state.item.pop()
    },
    cleateItem:(state)=>{
        state.item=[]
    }
   }
});

export const {addItem,cleateItem,removeItem}=cartSlice.actions
export default cartSlice.reducer