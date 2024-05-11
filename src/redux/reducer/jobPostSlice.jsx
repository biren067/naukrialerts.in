
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  jobList: [],
}

export const jobPostSlice = createSlice({
  name: "jobpost",
  initialState,
  reducers: {
    loadPost:(state,action)=>{
        console.log("********* Redux::loadPost is called ***********");
        console.log("********* Redux::",action.payload.jobList);
        state.jobList=action.payload.jobList;
      },
  }
})

// Action creators are generated for each case reducer function
export const { loadPost} = jobPostSlice.actions

export default jobPostSlice.reducer