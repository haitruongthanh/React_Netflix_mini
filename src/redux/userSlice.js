import { createSlice } from "@reduxjs/toolkit";
import { localStorageService } from "../services/localStorageService";

const initialState = {
  userInfo: localStorageService.getUserInfo(),
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfor } = userSlice.actions;
export default userSlice.reducer;
