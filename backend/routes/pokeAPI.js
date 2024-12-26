import express from 'express';
import axios from 'axios';
import pool from '../db.js';

const router = express.Router();

const fetchAndInsertPokemon = async () => {
    try {

    } catch (err) {
        console.error('Error Fetching from PokeAPI or Inserting into DB Table: ', err);
    }
}