import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress, getPosition } from "../../util";

const initialState = {
  userName: "",
  status: "idle",
  address: "",
  position: "",
  error: "",
};

const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  const userPositionObj = await getPosition();

  const { latitude: lat, longitude: lng } = userPositionObj.coords;

  const addressData = await getAddress(lat, lng);
  const address = `${addressData.localty}, ${addressData.district}, ${addressData.state}, ${addressData.country}, ${addressData.postcode}`;

  return { position: { lat, lng }, address };
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.address = action.payload.address;
        state.position = action.payload.position;
        state.status = "idle";
      })
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      });
  },
});

export const { updateName } = userSlice.actions;
export { fetchAddress };
export default userSlice.reducer;
