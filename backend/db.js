import pkg from 'pg';
const { Pool } = pkg;

import dotenv from 'dotenv';

dotenv.config({ path: "../.env" });
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
    if (err) {
        console.error('Database connection error:', err.stack);
        console.error('Pool Data:', poolData());
    } else {
        console.log('DB Connection Established:', res.rows[0]);
    }
});

export default pool;