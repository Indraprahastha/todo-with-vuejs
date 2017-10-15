let express = require('express');
let bodyParser = require('body-parser');
var morgan = require('morgan')
var cors = require('cors')

const mongoose = require('mongoose')
//--------------------------------------------------------
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(cors())

var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://Indraprahastha:Pancasila-85@cluster0-shard-00-00-ubshk.mongodb.net:27017,cluster0-shard-00-01-ubshk.mongodb.net:27017,cluster0-shard-00-02-ubshk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

mongoose.connect(uri);
var db = mongoose.connection;
//--------------------------------------------------------
let user = require('./routers/user.js')
let todo = require('./routers/todo.js')
//--------------------------------------------------------
app.use('/user', user)
app.use('/todo', todo)

app.listen(process.env.PORT || 3005, function(){
  console.log('Run Todo');
})
