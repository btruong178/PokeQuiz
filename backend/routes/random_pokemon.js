import express from 'express';
import pool from '../db.js';
const router = express.Router();

const random_2_pokemon = async (req, res) => {
    try {
        const pokemon1 = await pool.query('SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 1');
        const pokemon2 = await pool.query('SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 1');
        res.json({ pokemon1: pokemon1.rows[0], pokemon2: pokemon2.rows[0] });
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'Database error', details: err.message });
    }

}

router.get('/random_2_pokemon', random_2_pokemon);