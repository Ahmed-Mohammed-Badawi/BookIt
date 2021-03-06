import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RoomItem from "./Room/RoomItem";

import { toast } from "react-toastify";

function Home() {
    const { rooms, error } = useSelector((state) => state.Room);

    useEffect(() => {
        toast.error(error);
    }, [error]);

    return (
        <section id="rooms" className="container mt-5">
            <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

            <a href="#" className="ml-2 back-to-search">
                {" "}
                <i className="fa fa-arrow-left"></i> Back to Search
            </a>
            <div className="row">
                {rooms.length === 0 ? (
                    <div className="alert alert-danger">No Rooms</div>
                ) : (
                    rooms &&
                    rooms.map((room) => {
                        return <RoomItem key={room._id} room={room} />;
                    })
                )}
            </div>
        </section>
    );
}

export default Home;
