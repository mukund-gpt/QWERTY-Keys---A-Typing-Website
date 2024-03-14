const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose(); // Import sqlite3 module with verbose mode
const path = require('path');

// Define the path to the SQLite database file
const dbPath = path.join(__dirname, 'db.sqlite3');

// Connecting Database
let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error occurred while connecting to the database:', err.message);
    } else {
        console.log('Database connected successfully');
        // Create table and insert entries once database is connected
        createTable(() => {
            insertEntries();
        });
    }
});

// Create table function
function createTable(callback) {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error('Error occurred while creating table:', err.message);
        } else {
            console.log('Table created successfully');
            callback(); // Call the callback function to proceed after table creation
        }
    });
}

// Insert entries function
function insertEntries() {
    const insertQuery = `INSERT INTO users (name, email) VALUES (?, ?)`;
    const name="hello world";
    const eamil="hello@world "


    const entries = [
        [name,eamil]
    ];
    
    entries.forEach(entry => {
        db.run(insertQuery, entry, (err) => {
            if (err) {
                console.error('Error occurred while inserting entry:', err.message);
            } else {
                console.log('Entry inserted successfully');
            }
        });
    });
}

// Express route to fetch data from database
app.get('/', (req, res) => {
    db.all(`SELECT * FROM users`, (err, rows) => {
        if (err) {
            console.error('Error occurred while fetching data:', err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(rows);
        }
    });
});

// Server Running
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
