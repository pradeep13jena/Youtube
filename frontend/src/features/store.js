import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebarSlice";
import tokenReducer from "./tokenSlice"

export const store = configureStore({
  reducer: {
    sidebar: sidebar,
    auth: tokenReducer
  }
})