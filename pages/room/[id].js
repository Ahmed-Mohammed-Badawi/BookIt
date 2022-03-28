import React from "react";
// Import Wraaper From Redux Store
import { wrapper } from "../../Redux/Store";
// Import Async Function From Redux Async Functions
import { getRoomDetails } from "../../Redux/AsyncFunctions/AllAsyncFunctions";
import RoomDetails from "../../components/Room/RoomDetails";

function RoomDetailsPage() {
    return <RoomDetails />;
}

export default RoomDetailsPage;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, params: { id } }) => {
            await store.dispatch(getRoomDetails({ req, id }));
        }
);
