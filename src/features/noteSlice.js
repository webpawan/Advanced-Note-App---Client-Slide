import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectNote: {},
};

const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    setSelectNote: (state, action) => {
      state.selectNote = action.payload;
      
    },
  },
});

export default noteSlice.reducer;
export const { setSelectNote } = noteSlice.actions;
export const getSelectNote = (state) => state.note.selectNote;
