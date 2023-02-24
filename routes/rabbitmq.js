const express = require('express')
const app = express();
const {testProduceQueue} = require('../controllers/rabbitmq');

app.get('/', testProduceQueue);

module.exports=app;