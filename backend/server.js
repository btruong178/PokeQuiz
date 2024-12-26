import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import apiroutes from './routes/api.mjs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Backend Server')
});

app.use('/api', apiroutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});