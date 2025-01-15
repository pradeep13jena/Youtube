import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebarSlice";
import tokenReducer from "./tokenSlice"
import searchbar from "./searchSlice"

export const store = configureStore({
  reducer: {
    sidebar: sidebar,
    auth: tokenReducer,
    searchbar: searchbar
  }
})