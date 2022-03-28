import { createSlice } from "@reduxjs/toolkit";
import { getRooms } from "../AsyncFunctions/AllAsyncFunctions";
import { HYDRATE } from "next-redux-wrapper";

import {
    getRoomsPending,
    getRoomsSuccess,
    getRoomsFailed,
} from "../AsyncFunctions/RoomAsyncActions";

const RoomSlice = createSlice({
    name: "Room",
    initialState: { rooms: [] },
    reducers: {},
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return { ...state, ...action.payload.Room };
        },
        [getRooms.pending]: getRoomsPending,
        [getRooms.fulfilled]: getRoomsSuccess,
        [getRooms.rejected]: getRoomsFailed,
    },
});

export default RoomSlice;
