const mysql2 = require('mysql2');

var db = mysql2.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"employee"
});

db.connect((err)=>{
    if(err){
        console.log("error in db");
    }else{
        console.log("db connected");
    }
});

module.exports = db;
