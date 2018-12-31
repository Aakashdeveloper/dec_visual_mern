const express = require('express');
const app = express();

const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const PORT = 2000;
var db;
var mongourl = 'mongodb://localhost:27017/';
// var mongoClass = require('./model/database.js');
var collection_name = 'first';

//tell Express to make this public folder accessible to the public by using a built-in middleware called express.static
app.use(express.static(__dirname + '/public'));
// The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




app.set('view engine', 'ejs')
app.set('views', './views');

app.post('/addData', (req, res) => {
	console.log("Body received to add data is "+JSON.stringify(req.body));
  db.collection(collection_name).save(req.body, (err, result) => {
    if (err) return console.log(err)
    	console.log("result is "+JSON.stringify(result));
    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  db.collection(collection_name).find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
	console.log("Data received from db to show on index page is "+JSON.stringify(result));
    res.render('index.ejs', {data: result})
    // res.send(result)
  })
})

app.post('/find_by_name', (req, res) => {
    console.log("Body received to add data is "+JSON.stringify(req.body));
    var name = req.body.id;
  db.collection(collection_name).find({first_name: name}).toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
  console.log("Data received from db to show in Modal is "+JSON.stringify(result));
    res.send(result)
  })
})



app.get('/new', (req, res) => {
  db.collection(collection_name).find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('admin.ejs', {data: result})
  })
})

app.get('/bkp', (req, res) => {
  db.collection(collection_name).find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('bkp.ejs', {data: result})
  })
})

app.put('/update_user', (req, res) => {
	console.log('i was called, and i am updating the db');
	console.log('Data received to update'+JSON.stringify(req.body));
  console.log('_id is '+req.body._id);
  db.collection(collection_name)
  .findOneAndUpdate({"_id":req.body._id}, {
    $set: {
      last_name: req.body.last_name,
      first_name: req.body.first_name,
      email: req.body.email
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/delete_user', (req, res) => {
	console.log('i was called, and i am deleting entry from the db');
  console.log('Data i got is '+JSON.stringify(req.body));
  db.collection(collection_name).findOneAndDelete({first_name: req.body.id},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send({message: 'success'})
  })
})

// app.get('/all', (req, res) => {
	//The toArray method takes in a callback function that allows us to do stuff with quotes we retrieved from database
//	db.collection(collection_name).find({}).toArray(function(err, results) {
//	  console.log(results)
	  // send HTML file populated with quotes here
//	})
//})


// app.listen(PORT, function() {
//   console.log('+++++++++++++++++++++++ Server listening on PORT '+PORT);
// })

MongoClient.connect(mongourl, (err, client) => {
  if (err) return console.log(err)
  db = client.db('acadgild_aug') // whatever your database name is
  app.listen(PORT, () => {
    console.log('+++++++++++++++++++++++ Server listening on PORT '+PORT);
  })
})