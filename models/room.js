const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter room name"],
        trim: true,
        maxlength: [100, "Can not br more than 100 characters"],
    },
    price: {
        type: Number,
        required: [true, "Please enter room Price"],
        maxlength: [4, "Can not br more than 4 Numbers"],
    },
    description: {
        type: String,
        required: [true, "Please enter room description"],
    },
    address: {
        type: String,
        required: [true, "Please enter room address"],
    },
    guestCapacity:{
        type: Number,
        required: [true, "Please enter the guest Capcity"]
    },
    numOfBeds: {
        type: Number,
        required: [true, "Please enter room beds Number"],
    },
    internet: {
        type: Boolean,
        default: false,
    },
    breakfast: {
        type: Boolean,
        default: false,
    },
    airCondition: {
        type: Boolean,
        default: false,
    },
    petsAllowed: {
        type: Boolean,
        default: false,
    },
    roomCleaning: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    category: {
        type: String,
        required: [true, "Please enter room category"],
        enum: {
            values: ["King", "Single", "Couples"],
            message: "Please Select the Right Category for room",
        },
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Room || mongoose.model("Room", roomSchema);
