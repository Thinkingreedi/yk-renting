import { getHomeGooodPriceDate } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
  const res = await getHomeGooodPriceDate()

  return res
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

export const { changeGoodPriceInfo } = homeSlice.actions

export default homeSlice.reducer
