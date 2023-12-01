import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connection from './utils/db/connect.js';

import homeRouter from './routes/home.route.js';
import tempalteModel from './models/template.model.js';

const app = express();
const PORT = process.env.PORT;

connection();

app.use(express.json());
app.use(cors({
    "origin": "http://localhost:3000",
    "methods": "GET, PUT, POST, DELETE"
}));

app.get('/', async (req, res) => { 
    const data = await tempalteModel.find();
    res.json(data);
})

app.use('/api/home', homeRouter);



app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

