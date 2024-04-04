import { getTagList } from '@/api/tag'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchTagList = createAsyncThunk<any, string>('tag', async () => {
  const res = await getTagList()
  console.log('🚀 ~ fetchTagList ~ res:', res)
})
const initialState = {
  value: 1
}
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    }
  }
})

export const { increment } = postSlice.actions
export default postSlice.reducer
