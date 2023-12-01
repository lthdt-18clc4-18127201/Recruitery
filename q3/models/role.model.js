import mongoose from "mongoose";


const Role = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('role', Role);