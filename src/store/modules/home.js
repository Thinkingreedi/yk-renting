import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {

})


const homeSlice = createSlice({
  name: "home",
  initialState: {

  },
  reducers: {

  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload
    // }
  }
})

export const {

} = homeSlice.actions

export default homeSlice.reducer
