import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = 3000;

// PostgreSQL client setup
const pgPool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'mydatabase',
  password: 'password',
  port: 5431,
});


// Connect to clients
async function connectClients() {
  try {
    await pgPool.connect();
    console.log('Connected to PostgreSQL');
  } catch (err) {
    console.error('Failed to connect to databases', err);
  }
}

// A simple route
app.get('/', async (req, res) => {
  let pgValue = 'Not found in PostgreSQL';

  try {
    // Example: Get data from PostgreSQL
    const result = await pgPool.query('SELECT $1::text as message', ['Hello from PostgreSQL!']);
    pgValue = result.rows[0].message;

    res.json({
      message: 'Server is running!',
      dataFromPostgres: pgValue,
    });
  } catch (err) {
    res.status(500).send('An error occurred');
  }
});

// Start the server
app.listen(port, () => {
  connectClients();
  console.log(`Server listening at http://localhost:${port}`);
});