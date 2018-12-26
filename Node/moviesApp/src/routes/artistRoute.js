import express from 'express';

let artistRouter = express.Router();

function router(nav){
    artistRouter.route('/')
        .get((req,res) => {
            res.render('artist', {
                title:'Artist Page',
                nav})
    })

    artistRouter.route('/details')
        .get((req,res) => {
            res.render('artistDetail', {
                title:'Artist Detail Page',
                nav})
    })

    return artistRouter
}


module.exports = router;