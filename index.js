const express = require('express');
const app = express();
const db = require('./connection');
app.use(express.json());


app.get('/find',(req,res)=>{

    db.query("SELECT * FROM employee",(err,rows)=>{
        if(err){
            
            res.send("error getting data")
        }else{
            res.send(rows);
        }
    });

});


app.post('/create',(req,res)=>{
    const data = [req.body.id,req.body.name,req.body.email,req.body.password];
    db.query("INSERT INTO `employee`(id,name,email,password)VALUES(?)",[data],(err,rows)=>{
        if(err){
            console.log("error in creating data");
            res.send("error in create data");
        }else{
            console.log("data creating successfully");
            res.send("successfully");
        }
    })
});



app.delete('/delete/:id',(req,res)=>{
    db.query("DELETE FROM `employee` WHERE id=?",[req.params.id],(err,rows)=>{
        if(err){
            console.log("error in delete data");
            res.send("error in delete data");
        }else{
            console.log("data delete successfully");
            res.send("data delete successfully");
        }
    })
});


app.put('/update',(req,res)=>{

    const employee = req.body;
    console.log(employee.id);
    // connect.query('UPDATE `student` SET ? WHERE student_id=?'+student.student_id,[student],(err,rows)=>{

    db.query('UPDATE employee SET ? WHERE id='+employee.id,[employee],(err,rows)=>{
        if(err){
            console.log("error in update data",err);
            res.send("error in update data");
        }else{
            console.log("data update successfully");
            res.send("data update successfully");
        }

    });
})

app.listen(3000,function(){
    console.log("server is running in port 3000");
})

