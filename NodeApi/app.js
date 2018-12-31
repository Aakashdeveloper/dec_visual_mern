const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = 7900;
let db;
let mongourl = "mongodb://localhost:27017";

app.get('/', (req, res) => {
    res.send("Welcome to Node Api")
})

app.get('/movies', (req,res) => {
    db.collection('books').find().toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/company', (req,res) => {
    db.collection('first').find().toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.post('/insert', (req,res)=>{
    let insertData = {name:'DEll', type:'Tech'}
    db.collection('first').insert(insertData, (err, result) => {
        if(err) throw err;
        console.log('data inserted')
    })
})

MongoClient.connect(mongourl, (err, client) => {
    if(err) throw err;
    db = client.db('acadgild_aug')
    app.listen(port,()=>{
        console.log('running on port number '+ port)
    })
})

