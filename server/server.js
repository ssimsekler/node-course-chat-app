const path = require('path');
const express = require('express');

const {
    config
} = require('./config/config.js');

const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

app.listen(config.port, () => {
    console.log('Application started listening the port', config.port);
});

module.exports = {
    app
};