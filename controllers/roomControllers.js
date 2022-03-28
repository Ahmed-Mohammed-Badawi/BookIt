import Room from "../models/room";
import ApiFeatures from "../helpers/apiFeatures";

// Get all Rooms => /api/rooms
const allRooms = async (req, res) => {
    try {
        // The Number of Items Per Page
        const resPerPage = 4;
        // The Length of all Rooms
        const roomsCount = await Room.countDocuments();

        // Make a instance of Class
        const apiFeatures = new ApiFeatures(Room.find(), req.query);
        // Run the search, filter, pagination methods
        apiFeatures.search().filter().pagination(resPerPage);

        // get the Result of Methods [Rooms]
        let rooms = await apiFeatures.query;
        // Get the length of the result after Methods [rooms]
        const filteredRoomsCount = rooms.length;

        res.status(400).json({
            success: true,
            message: "All Rooms are Available",
            roomsCount,
            resPerPage,
            filteredRoomsCount,
            rooms,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "Something Went Wrong With Catch all Rooms",
            error: error.message,
        });
        return;
    }
};

// create new room => /api/rooms
const newRoom = async (req, res) => {
    let room;

    try {
        room = await Room.create(req.body);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong With Creating Room",
            error: error.message,
        });
        return;
    }

    res.status(200).json({
        success: true,
        room,
    });
};

// Get Single room => /api/rooms/id
const getSingleRoom = async (req, res) => {
    let room;
    try {
        room = await Room.findById(req.query.id);
        if (!room) {
            return res.status(400).json({
                success: false,
                message: "There is no room found with this id.",
                error: error.message,
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong With Getting a Single Room",
            error: error.message,
        });
        return;
    }

    res.status(200).json({
        success: true,
        message: "Getting Single Room Went Successfully",
        room,
    });
};

// Update Single room => /api/rooms/id
const updateSingleRoom = async (req, res) => {
    let room;

    try {
        room = await Room.findById(req.query.id);

        if (!room) {
            return res.status(400).json({
                success: false,
                message: "There is no room found with this id.",
                error: error.message,
            });
        }

        room = await Room.findByIdAndUpdate(req.query.id, req.body);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong With Updating a Single Room",
            error: error.message,
        });
        return;
    }

    res.status(200).json({
        success: true,
        message: "Updating Single Room Went Successfully",
        room,
    });
};

// Delete Single room => /api/rooms/id
const deleteSingleRoom = async (req, res) => {
    let room;

    try {
        room = await Room.findById(req.query.id);

        if (!room) {
            return res.status(400).json({
                success: false,
                message: "There is no room found with this id.",
                error: error.message,
            });
        }

        await room.remove();
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong With Removing a Single Room",
            error: error.message,
        });
        return;
    }

    res.status(200).json({
        success: true,
        message: "Removing Single Room Went Successfully",
        room,
    });
};

export { allRooms, newRoom, getSingleRoom, updateSingleRoom, deleteSingleRoom };
