const URI = process.env.PG_URI;

const { Pool } = require('pg');

const pool = new Pool({ connectionString: URI });

pool.on('connect', () => console.log('Connected to pgDb'));

module.exports = {
  query: (query, params, cb) => pool.query(query, params, cb),
};
