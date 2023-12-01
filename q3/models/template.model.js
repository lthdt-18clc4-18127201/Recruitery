import mongoose from "mongoose";

const Template = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'https://www.vietnamworks.com/assets-wowcv/images/list_templates/cv_template_33.png',
        required: true
    },
    category: {
        type: String,
    },
    role: {
        type: String,
    },
}, {
    timestamps: true
})

export default mongoose.model('template', Template);    