import pkg from 'pg';
import { fileURLToPath } from 'url';
import path from 'path';
const { Pool } = pkg;

import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const poolData = async () => {
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_NAME:', process.env.DB_NAME);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    console.log('DB_PORT:', process.env.DB_PORT);
}


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Check if the database connection is established
pool.query('SELECT NOW()', (err, res) => {
    console.log("--------------------------------\nFrom db.js\n--------------------------------");
    if (err) {
        console.error('Database connection error(db.js):', err.stack);
        console.error('Pool Data:', poolData());
    } else {
        console.log('DB Connection Established(db.js):', res.rows[0]);
        console.log(poolData());
    }
    console.log("--------------------------------");
});

export default pool;