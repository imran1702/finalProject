import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    addCart: (state, action) => {
      state.value = action.payload
      console.log(action.payload);
      
    },
  },
})

export const { addCart } = productSlice.actions

export default productSlice.reducer