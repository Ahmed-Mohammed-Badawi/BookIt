import { createAsyncThunk } from "@reduxjs/toolkit";
import absoluteUrl from "next-absolute-url";

// ROOM SLICE
export const getRooms = createAsyncThunk("rooms/getRooms", async (req) => {
    const { origin } = absoluteUrl(req);

    const rooms = await fetch(`${origin}/api/rooms`).then((res) => res.json());

    return rooms;
});

// EROOM DETAILS SLICE
export const getRoomDetails = createAsyncThunk(
    "room/getSingleRoomDetails",
    async ({ req, id }) => {
        console.log("From AllAsync" + id);
        const { origin } = absoluteUrl(req);
        const room = await fetch(`${origin}/api/rooms/${id}`).then((res) =>
            res.json()
        );
        return room;
    }
);
