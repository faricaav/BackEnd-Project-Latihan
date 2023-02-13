const express = require('express');
const bodyParser = require('body-parser');
const users = require('../controllers/users');
const app = express();

const resp = function (res, data, code, next) {
    res.status(code).json(data);
    return next();
};

const {getUser, getUserById, saveUser, updateUser, deleteUser} = require('../controllers/users')

app.post('/', saveUser);
app.get('/', getUser)
app.get('/:id', getUserById);
app.put('/:id', updateUser);
app.delete('/:id', deleteUser);

module.exports = app