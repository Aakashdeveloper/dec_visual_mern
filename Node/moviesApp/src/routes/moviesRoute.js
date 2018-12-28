import express from 'express';
import MongoClient from 'mongodb';
import 'babel-polyfill'

let moviesRouter = express.Router();

var movies = [
    {
        "_id": "5ab12612f36d2879268f284a",
        "name": "Black Panther",
        "language": "ENGLISH",
        "rate": 4.5,
        "type": "Action Adventure Fantasy",
        "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
      }
]
function router(nav){
    moviesRouter.route('/')
        .get((req,res) => {
            const url = 'mongodb://localhost:27017';
            const dbName= 'acadgild_aug';
            (async function mongo(){
                let client;
                try{
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName)
                    const col = await db.collection('books');
                    const movies = await col.find().toArray();
                    //res.send(movies)
                    res.render('movies', {
                        title:'Movies Page',
                        nav:nav,
                        data:movies})
                }
                catch(err){
                    console.log(err)
                }
                client.close();
            }())
            
    })

    moviesRouter.route('/:id')
        .get((req,res) => {
            const {id} = req.params;
            const url = 'mongodb://localhost:27017';
            const dbName= 'acadgild_aug';
            (async function mongo(){
                let client;
                try{
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName)
                    const col = await db.collection('books');
                    const moviesDetails = await col.findOne({_id:id});
                    //res.send(movies)
                    res.render('detail', {
                        title:'Detail Page',
                        nav:nav,
                        data:moviesDetails})
                }
                catch(err){
                    console.log(err)
                }
                client.close();
            }())
        
})
    
    return moviesRouter
}

module.exports = router;