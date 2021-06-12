const mongoose = require("mongoose");

const PetsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH}"],

    },

    type: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH}"],

    },

    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH}"],  
    },

    skillOne: {
        type: String,
    },

    skillTwo: {
        type: String,
    },

    skillThree: {
        type: String,
    },

}, {timestamps: true});

module.exports.Pets = mongoose.model("Pets", PetsSchema);