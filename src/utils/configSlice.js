import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "langConfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLangugae: (state, action) => {
      state.lang = action.payload;
    },
  },
});


export const {changeLangugae} = configSlice.actions;

export default configSlice.reducer;
