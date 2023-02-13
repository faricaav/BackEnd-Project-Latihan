const express = require('express')
const app = express();

const {getArtikel, getArtikelById, saveArtikel, updateArtikel, deleteArtikel} = require('../controllers/artikel')
 
app.get('/', getArtikel);
app.get('/:id', getArtikelById);
app.post('/', saveArtikel);
app.put('/:id', updateArtikel);
app.delete('/:id', deleteArtikel);
 
module.exports = app