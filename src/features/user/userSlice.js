import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Shiv",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
