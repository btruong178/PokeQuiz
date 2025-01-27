import express from 'express';
import cors from 'cors';
import apiroutes from './routes/api.js';
import pokemonroutes from './routes/pokemon.js';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Backend Server');
});

app.use('/api', apiroutes);
app.use('/pokemon', pokemonroutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});