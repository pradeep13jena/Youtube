import { createSlice } from "@reduxjs/toolkit";
import reducer from "./tokenSlice";

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    subscriptionList: {},
  },
  reducers: {
    updateList: (state, action) => {
      state.subscriptionList = action.payload;
    },
  },
});

export const { updateList } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
