var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();

// view engine

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');
app.engine('html' , require('ejs').renderFile);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname , 'client/dist')));

app.use('/' , index);
app.use('/api/v1/', todos);


app.listen(3000 ,function() {
    console.log('Server started at port 3000');    
});

