 const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/dbconnect');
const multer = require('multer');
const app = express();
const appRoutes = require('./routes/route');
const path = require('path'); 

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/views/uploads', express.static('./views/uploads'));

app.use('/', appRoutes);

mongoose

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

