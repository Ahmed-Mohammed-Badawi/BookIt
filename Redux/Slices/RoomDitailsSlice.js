import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
// Importing the Async Function
import { getRoomDetails } from "../AsyncFunctions/AllAsyncFunctions";
import {
    getDetailsSuccess,
    getDetailsFail,
} from "../AsyncFunctions/SingleRoomDetailsActions";

const RoomDitailsSlice = createSlice({
    name: "RoomDitails",
    initialState: {},
    reducers: {
        ClearError: (state, action) => {
            error: null;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return { ...state, ...action.payload.RoomDitails };
        },
        [getRoomDetails.fulfilled]: getDetailsSuccess,
        [getRoomDetails.rejected]: getDetailsFail,
    },
});

export const { ClearError } = RoomDitailsSlice.actions;
export default RoomDitailsSlice;
