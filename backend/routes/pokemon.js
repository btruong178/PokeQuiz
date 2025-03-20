import express from 'express';
import pool from '../db.js';
const router = express.Router();

router.get('/random_pokemon', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 1');
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Database query error (/random_pokemon):', err);
        res.status(500).json({ error: 'Database error', details: err.message });
    }
});

router.get('/damage_relations', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, name FROM types');
        res.json(result.rows);
    } catch (err) {
        console.error('Database query error (/damage_relations):', err);
        res.status(500).json({ error: 'Database error', details: err.message });
    }
})


export default router;