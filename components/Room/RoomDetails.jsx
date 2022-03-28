import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import RoomFeatures from "./RoomFeatures";

import { Carousel } from "react-bootstrap";

import { toast } from "react-toastify";
import { ClearError } from "../../Redux/Slices/RoomDitailsSlice";

import { useSelector, useDispatch } from "react-redux";

function RoomDetails() {
    const { room, error } = useSelector((state) => state.RoomDitails);
    const dispatch = useDispatch();

    useEffect(() => {
        toast.error(error);
        dispatch(ClearError());
    }, [error]);

    return (
        <>
            <Head>
                <title>{room.name} - BookIt</title>
            </Head>
            <div className="container container-fluid">
                <h2 className="mt-5">{room.name}</h2>
                <p>{room.address}</p>

                <div className="ratings mt-auto mb-3">
                    <div className="rating-outer">
                        <div
                            style={{
                                width: `${(room.numOfReviews / 5) * 100}%`,
                            }}
                            className="rating-inner"
                        ></div>
                    </div>
                    <span id="no_of_reviews">
                        ({room.numOfReviews} Reviews)
                    </span>
                </div>

                <Carousel hover="pause" fade touch>
                    {room.images &&
                        room.images.map((image) => {
                            return (
                                <Carousel.Item key={image.public_id}>
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "440px",
                                        }}
                                    >
                                        <Image
                                            src={image.url}
                                            className={"d-block m-auto"}
                                            layout={"fill"}
                                            objectFit={"cover"}
                                            alt={room.name}
                                        />
                                    </div>
                                </Carousel.Item>
                            );
                        })}
                </Carousel>

                <div className="row my-5">
                    <div className="col-12 col-md-6 col-lg-8">
                        <h3>Description</h3>
                        <p>{room.description}</p>
                        <RoomFeatures room={room} />
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="booking-card shadow-lg p-4">
                            <p className="price-per-night">
                                <b>${room.price}</b> / night
                            </p>

                            <button className="btn btn-block py-3 booking-btn">
                                Pay
                            </button>
                        </div>
                    </div>
                </div>

                <div className="reviews w-75">
                    <h3>Reviews:</h3>
                    <hr />
                    <div className="review-card my-3">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <p className="review_user">by John</p>
                        <p className="review_comment">Good Quality</p>

                        <hr />
                    </div>

                    <div className="review-card my-3">
                        <div className="rating-outer">
                            <div className="rating-inner"></div>
                        </div>
                        <p className="review_user">by John</p>
                        <p className="review_comment">Good Quality</p>

                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomDetails;
