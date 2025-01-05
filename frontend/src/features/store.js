import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebar
  }
})