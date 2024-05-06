
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  type: "",
  name: "",
  isLogin: false,
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    Login:(state,action)=>{
      state.type=action.payload.type;
      state.name=action.payload.name;
      state.isLogin= true;
    },
    Logout:(state)=>{
       state.type="";
       state.name="";
       state.isLogin= false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { Login, Logout} = usersSlice.actions

export default usersSlice.reducer