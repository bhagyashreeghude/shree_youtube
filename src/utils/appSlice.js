import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isLiveOpen: false,
    isOpenComment: false,
    isSportOpen:false,
    isTechOpen:false
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    closeLive: (state) => {
      state.isLiveOpen = true;
    },
    OpenComment: (state) => {
      state.isOpenComment = true;
    },
    SportOpen: (state) => {
      state.isSportOpen = true;
    },
    TechOpen: (state) => {
      state.isTechOpen = true;
    },
    DownloadOpen: (state) => {
      state.isDownloadOpen = true;
    },
  },
});
export const { toggleMenu, closeMenu, closeLive, OpenComment ,SportOpen,TechOpen,DownloadOpen} =
  appSlice.actions;
export default appSlice.reducer;
