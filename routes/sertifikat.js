//import library
const express = require('express');
const app = express();

const {getSertifikat, getSertifikatSiswa, getSertifikatById, saveSertifikat, updateSertifikat, deleteSertifikat} = require('../controllers/sertifikat')

app.get("/", getSertifikat)
app.get("/siswa/:nis", getSertifikatSiswa)
app.get("/:id", getSertifikatById)
app.post("/", saveSertifikat)
app.put("/:id", updateSertifikat)
app.delete("/:id", deleteSertifikat)

module.exports = app 