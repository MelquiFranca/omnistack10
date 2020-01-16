const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/omnistack', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);