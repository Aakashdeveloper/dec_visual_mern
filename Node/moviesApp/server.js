import express from 'express';
import chalk from 'chalk';
let debug = require('debug')('app')
import morgan from 'morgan'

let app = express();

app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs')

// app.use(morgan('dev'));
app.use(morgan('tiny'))
// app.use(morgan('{"remote_addr": ":remote-addr", "remote_user": ":remote-user", "date": ":date[clf]", "method": ":method", "url": ":url", "http_version": ":http-version", "status": ":status", "result_length": ":res[content-length]", "referrer": ":referrer", "user_agent": ":user-agent", "response_time": ":response-time"}'));


app.get('/', (req,res,err) => {
    res.render('index', {title:'First Page'})
})

app.get('/products', (req,res)=> {
    res.send("running products page")
})



app.listen(3400,(err) => {
    if(err){
        console.log("error")
    }
    console.log(`server is running on port ${chalk.blue('3400')}`)
})



/*
app.get('/', function(req,res,err){
    res.send("Hi welcome to node express mongo react")
})



app.listen(3400, function(err){
    if(err){
        console.log("error")
    }
    console.log("server is running on port 3400")
})
*/