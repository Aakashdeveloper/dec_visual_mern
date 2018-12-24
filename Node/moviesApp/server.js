let express = require('express');

let app = express();

app.get('/', function(req,res){
    res.send("Hi welcome to node express mongo react")
})

app.listen(3400, function(err){
    console.log("server is running on port 3400")
})