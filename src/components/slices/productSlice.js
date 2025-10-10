import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'counter',
  initialState: {
    cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  },
  reducers: {
    addCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
      if(findProduct == -1){
        state.cartItem = [...state.cartItem, action.payload]
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }else{
        state.cartItem[findProduct].qun += 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },
    increment: (state, action)=>{
      state.cartItem[action.payload].qun += 1
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    decrement: (state, action)=>{
      if(state.cartItem[action.payload].qun > 1){
        state.cartItem[action.payload].qun -= 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },
    productRemove: (state, action)=>{
      state.cartItem.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
  },
})

export const { addCart, increment, decrement, productRemove } = productSlice.actions

export default productSlice.reducer