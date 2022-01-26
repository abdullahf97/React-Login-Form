const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host: "localhost",
    password:"",
    database:"logindb"
});

app.post("/register", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO loginsystem(username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
        console.log(err);
    }
    )
})

app.post('/login', (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM loginsystem WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({err: err})
            }

            if(result.length > 0) {
                res.send(result);
            } else {
                res.send ({ message: "Wrong username or password!"});
            }
        })
})

app.listen(3001, () =>{
    console.log("running server")
})

{/*app.get('/insert', (req, res) => {
    //res.send('Hello World')
    db.query('INSERT INTO loginsystem (username, password) VALUES("Abdullah", "abc")', [32], (err, result) => {
        if (err) {
            console.group(err);
        }
        res.send(result);
    })
}
)
*/}
