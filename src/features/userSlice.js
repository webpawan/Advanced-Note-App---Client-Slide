import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo : {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.userInfo = action.payload
    },
    
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;

export const getUser = (state) => state.user.userInfo;