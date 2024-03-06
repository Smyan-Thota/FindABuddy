const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = new sqlite3.Database('./mydb.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the mydb.sqlite database.');
});

// Define POST operation for creating a new user profile
app.post('/user-profile', (req, res) => {
    const { name, gender, age, graduationYear, major } = req.body;
    const sql = `INSERT INTO UserProfile (Name, Gender, Age, GraduationYear, Major)
                 VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [name, gender, age, graduationYear, major], function(err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ 
        message: 'Profile Created', 
        id: this.lastID // Returns the ID of the newly created profile
      });
    });
  });


// GET all user profiles
app.get('/user-profiles', (req, res) => {
    const sql = `SELECT * FROM UserProfile`;
    db.all(sql, [], (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
  // GET a single user profile by ID
  app.get('/user-profile/:id', (req, res) => {
    const sql = `SELECT * FROM UserProfile WHERE UserID = ?`;
    const params = [req.params.id];
    db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });
  
  // PUT to update a user profile
  app.put('/user-profile/:id', (req, res) => {
    const { name, gender, age, graduationYear, major } = req.body;
    const sql = `UPDATE UserProfile SET Name = ?, Gender = ?, Age = ?, GraduationYear = ?, Major = ? WHERE UserID = ?`;
    const params = [name, gender, age, graduationYear, major, req.params.id];
    db.run(sql, params, function(err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'Profile Updated',
        data: req.body,
        changes: this.changes
      });
    });
  });
  
  // DELETE a user profile
  app.delete('/user-profile/:id', (req, res) => {
    const sql = `DELETE FROM UserProfile WHERE UserID = ?`;
    const params = [req.params.id];
    db.run(sql, params, function(err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ message: 'Profile Deleted', changes: this.changes });
    });
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
