import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan'

let app = express();

app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs')

app.use(morgan('tiny'))

var navArray = [{link:'/', title:'Home'},
                {link:'/movies', title:'Movies'},
                {link:'/artist', title:'Artits'}];
      
let moviesRouter = require('./src/routes/moviesRoute')(navArray)
let artistRouter = require('./src/routes/artistRoute')(navArray)

app.get('/', (req,res,err) => {
    res.render('index', {title:'Home Page',nav:navArray})
})


app.use('/movies', moviesRouter);
app.use('/artist', artistRouter);

app.listen(3400,(err) => {
    if(err){
        console.log("error")
    }
    console.log(`server is running on port ${chalk.blue('3400')}`)
})
