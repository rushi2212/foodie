// checkDatabase.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'foodie.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to open database:', err.message);
  } else {
    console.log('Database opened successfully at:', dbPath);
  }

  db.close();
});
