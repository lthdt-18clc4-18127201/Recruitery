import mongoose from "mongoose";


const Category = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('category', Category);