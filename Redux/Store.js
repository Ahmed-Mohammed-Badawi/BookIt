import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// SLICES
import RoomSlice from "./Slices/RoomSlice";
import RoomDitailsSlice from "./Slices/RoomDitailsSlice";

// Compining My Reducers;
const AllReducers = {
    reducer: {
        [RoomSlice.name]: RoomSlice.reducer,
        [RoomDitailsSlice.name]: RoomDitailsSlice.reducer,
    },
};

const makeStore = () => configureStore(AllReducers);

export const wrapper = createWrapper(
    makeStore,
    applyMiddleware(composeWithDevTools)
);
