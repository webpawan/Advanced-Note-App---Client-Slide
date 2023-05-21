import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectNote: {},
  search: {},
};

const noteSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    setSelectNote: (state, action) => {
      state.selectNote = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default noteSlice.reducer;
export const { setSelectNote,setSearch } = noteSlice.actions;
export const getSelectNote = (state) => state.note.selectNote;
export const getSearch = (state) => state.note.search;
