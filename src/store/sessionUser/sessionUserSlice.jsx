import { createSlice } from "@reduxjs/toolkit";
const defaultUser = {
  id: "",
  userName: "",
  email: "",
  token: "",
  name: "",
  lastName: "",
  role: "Visitante",
};
export const sessionUserSlice = createSlice({
  name: "sessionUser",
  initialState: {
    userInfo: defaultUser,
  },
  reducers: {
    setUserState: (state, action) => {
      state.userInfo = action.payload;
    },
    setDefaultUser: (state) => {
      state.userInfo = defaultUser;
    },
  },
});

export const { setUserState, setDefaultUser } = sessionUserSlice.actions;
