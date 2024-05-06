
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  color: "light",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      // state.color = action.color === "light" ?"dark":"light"
      state.color;
      }
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions

export default themeSlice.reducer