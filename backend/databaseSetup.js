const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the mydb.sqlite database.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS UserProfile (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Gender TEXT,
    Age INTEGER,
    GraduationYear TEXT,
    Major TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS UserInterests (
    InterestID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER,
    Interest TEXT NOT NULL,
    FOREIGN KEY(UserID) REFERENCES UserProfile(UserID)
  )`);
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
