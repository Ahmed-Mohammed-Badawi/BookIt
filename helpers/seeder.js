const Room = require("../models/room");
// Rooms File
const rooms = require("../data/rooms.json");
// Connection to db
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookit");

const seedRooms = async () => {
    try {
        // Delete all rooms
        await Room.deleteMany();
        console.log("Rooms are deleted");
        // Insert all rooms in db
        await Room.insertMany(rooms);
        console.log("All Rooms Are Inserted");
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};

seedRooms();
