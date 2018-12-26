import express from 'express';

let moviesRouter = express.Router();

var movies = [
    {
      "_id": "5ab12612f36d2879268f284a",
      "name": "Black Panther",
      "language": "ENGLISH",
      "rate": 4.5,
      "type": "Action Adventure Fantasy",
      "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
    },
    {
      "_id": "5ab12666f36d2879268f2902",
      "name": "Death Wish",
      "language": "ENGLISH",
      "type": "Action Crime Thriller",
      "rate": 3.2,
      "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
    },
    {
      "_id": "5ab12678f36d2879268f291d",
      "name": "Coco",
      "language": "ENGLISH",
      "type": "Adventure Animation Family",
      "rate": 5,
      "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
    },
    {
      "_id": "5ab126b6f36d2879268f2943",
      "name": "Avengers",
      "language": "ENGLISH",
      "type": "Actione",
      "rate": 2,
      "imageUrl": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg"
    }
]

function router(nav){
    moviesRouter.route('/')
        .get((req,res) => {
            res.render('movies', {
                title:'Movies Page',
                nav:nav,
                data:movies})
    })

    moviesRouter.route('/details')
        .get((req,res) => {
            res.render('movies', {
                title:'Detail Page',
                nav:nav,
                data:movies})
    })
    
    return moviesRouter
}


module.exports = router;