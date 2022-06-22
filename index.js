const express = require('express');
const cors = require('cors');
const morgan = require ('morgan');


const app = express();

app.use(cors());
app.use(morgan('dev'));

// connect to mongodb
require('./db/connect');

app.use('', require('./routes/api'));



app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests');
})