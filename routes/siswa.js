//import library
const express = require('express');
const app = express();

const {getSiswa, getSiswaById, saveSiswa, updateSiswa, deleteSiswa} = require('../controllers/siswa')

app.get("/", getSiswa)
app.get("/:id", getSiswaById)
app.post("/", saveSiswa)
app.put("/:id",  updateSiswa)
app.delete("/:id", deleteSiswa)

module.exports = app 