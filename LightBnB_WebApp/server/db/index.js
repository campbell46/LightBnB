require('dotenv').config();

const user = process.env.USER || 'vagrant';
const password = process.env.PASSWORD || '123';
const host = process.env.HOST || 'localhost';
const database = process.env.DATABASE || 'lightbnb';

//Create pool to connect to lightbnb database
const { Pool } = require('pg');

const pool = new Pool({
  user,
  password,
  host,
  database
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  }
};