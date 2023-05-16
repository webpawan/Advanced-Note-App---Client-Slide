import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deleteNote: {},
};

const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    setDelete: (state, action) => {
      state.deleteNote = action.payload;
    },
  },
});

export default noteSlice.reducer;
export const { setDelete } = noteSlice.actions;
export const getDeleteId = (state) => state.note.deleteNote;
