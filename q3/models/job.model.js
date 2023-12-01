import mongoose from "mongoose";


const Job = new mongoose.Schema({
    logo: {
        type: String,
        default: 'https://static.recruitery.co/uploads/images/08ab20c97c8b4d2783065d01072f0839_202105141',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    domain: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('job', Job);