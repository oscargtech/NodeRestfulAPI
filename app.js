var express = require('express');
mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/bookAPI');
var app = express();
var port = process.env.PORT || 3000;

var bookRouter = express.Router();

var Book = require('./models/bookModel');
bookRouter.route('/Books')
.get(function(req,res){

    var query = {};
    if(req.query.genre){
        query.genre = req.query.genre;
    }
    Book.find(query, function(err,books){
        if(err)
res.status(500).send(err)
        else
        res.json(books);
    })
    res.json(responseJson);
});
bookRouter.route('/Books/:bookId')
.get(function(req,res){
    Book.findById(rq.params.bookId, function(err,book){
        if(err)
res.status(500).send(err)
        else
        res.json(book);
    })
    res.json(responseJson);
});
app.use('/api', bookRouter);


app.get('/', function(req, res){
    res.send('welcome to my API!')
});

app.listen(port, function(){
    console.log('Gulp is running my app on PORT: '+ port);
});

