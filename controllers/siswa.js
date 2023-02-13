//import library
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import model
const model = require('../models/index');
const siswa = model.siswa

const getSiswa = async (req,res) => {
    await siswa.findAll()
    .then(result => {
        res.json(
            result
        )
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}

const getSiswaById = async (req,res) => {
    await siswa.findOne({ where: {nis: req.params.id}})
    .then(result => {
        res.json(
            result
        )
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}

const saveSiswa = async (req,res) => {
    let data = {
        nama : req.body.nama,
        alamat : req.body.alamat,
        jurusan : req.body.jurusan,
        sertifikat : req.body.sertifikat
    }

    await siswa.create(data)
    .then(result => {
        res.json({
            message: "data has been inserted"
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}

const updateSiswa = async (req,res) => {
    let param = {
        nis : req.params.id
    }
    let data = {
        nama : req.body.nama,
        alamat : req.body.alamat,
        jurusan : req.body.jurusan,
        sertifikat : req.body.sertifikat
    }
    await siswa.update(data, {where: param})
    .then(result => {
        res.json({
            message: "data has been updated"
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}

const deleteSiswa = async (req,res) => {
    let param = {
        nis : req.params.id
    }
    siswa.destroy({where: param})
    .then(result => {
        res.json({
            message: "data has been deleted"
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}



module.exports = {getSiswa, getSiswaById, saveSiswa, updateSiswa, deleteSiswa}