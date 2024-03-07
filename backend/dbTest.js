const sqlite3 = require('sqlite3').verbose();

// Adjust the path to match where your SQLite database is located
const db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
    return;
  }
  console.log('Connected to the SQLite database.');
});

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, name TEXT)");

  db.run("INSERT INTO test (name) VALUES (?)", ["Test User"], function(err) {
    if (err) {
      console.error('Error executing INSERT statement', err.message);
      return;
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  db.each("SELECT id, name FROM test", (err, row) => {
    if (err) {
      console.error('Error executing SELECT statement', err.message);
      return;
    }
    console.log(`${row.id}: ${row.name}`);
  });
});

// Close the database connection after all queries are done
db.close((err) => {
  if (err) {
    console.error('Error closing database', err.message);
  }
  console.log('Database connection closed.');
});
