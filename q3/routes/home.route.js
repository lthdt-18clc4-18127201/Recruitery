import express from "express";
import templateModel from '../models/template.model.js';

const router = express.Router();


router.get('/', async (req, res) => {
    const list = await templateModel.find({});
    res.json(list);
});

router.post('/', async (req, res) => {
    const newTemplate = new templateModel({
        title: req.body.title,
        category: req.body.category,
        role: req.body.role
    })
    
    await newTemplate.save();
    return res.status(201).json({
        message: 'new template created'
    })
})

export default router;
