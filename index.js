const express = require('express');
const cors = require('cors');
const morgan = require ('morgan');


require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));


app.use('/uploads', express.static('uploads'));

// importation du fichier cron
const crons = require('./crons/first-cron');

// connect to mongodb
require('./db/connect');

//routes
const api = require('./routes/api');
const apiTodo = require('./routes/api.todo');
const apiUser = require('./routes/api.user');
const apiEmail = require('./routes/email.api');
const apiUpload = require('./routes/api.upload');

app.use('/api/v1', api);
app.use('/api/v1', apiTodo);
app.use('/api/v1', apiUser);
app.use('/api/v1',apiEmail);
app.use('/api/v1', apiUpload);

app.set('view engine', 'ejs');
  
app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests');
})