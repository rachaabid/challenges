const express = require('express');
const cors = require('cors');
const morgan = require ('morgan');
const bodyParser = require('body-parser');
 require('dotenv').config();


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// connect to mongodb
require('./db/connect');

//routes
const api = require('./routes/api');
const apiTodo = require('./routes/api.todo');
const apiUser = require('./routes/api.user');

app.use('', api);
app.use('', apiTodo);
app.use('', apiUser);

app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests');
})