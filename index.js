const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require('mysql2')
const port = 3001;

//Database connecting---------------------------

const pool = mysql.createPool({
    connectionLimit: 10, // Adjust according to your needs
    user: "root",
    host: "localhost",
    password: "9072894916",
    database: "usersdb"
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/users', (req, res) => {
    pool.query("SELECT * FROM usersdb.student", (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(result);
        }
    });
});

app.post('/create', (req, res) => {
    console.log("recieved req body",req.body);
    const { StudentId, StudentName, StudentClass, StudentGrade } = req.body;

    if (!StudentId || !StudentName || !StudentClass || !StudentGrade) {
        return res.status(400).json({ error: 'Invalid request body' });
    }


    pool.query(
        'INSERT INTO student (StudentId, StudentName, StudentClass, StudentGrade) VALUES (?, ?, ?, ?)',
        [StudentId, StudentName, StudentClass, StudentGrade],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            res.json({ message: 'Student added successfully' });
        }
    );
}); 











//Server hosting-------------------

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 