import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ChangeLightState  {
  l:string
}

const initialState: ChangeLightState  = {
  l:'light'
}

export const changeLightReducer = createSlice({
  name: 'lightordark',
  initialState,
  reducers: {
    swapLight: (state) => {
        state.l = state.l === 'light' ? 'dark' : 'light'; // Gán giá trị mới cho state.l
      }
  },
})

// Action creators are generated for each case reducer function
export const { swapLight } = changeLightReducer.actions

export default changeLightReducer.reducer