const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')
const errorHandlers = require('./handlers/errorHandlers');
console.log(errorHandlers)
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test', (error) => {
  if(error) throw error;
  console.log('Successfully connected')
})

const port = process.env.PORT || 3000

const app = express();

app.use(bodyParser.json())

app.use(routes);

app.use(errorHandlers.notFound);

app.use(errorHandlers.errorResponse)

app.listen(port, ()=> {
  console.log(`Server listening on ${port}`)
})
