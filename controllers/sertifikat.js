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
const sertifikat = model.sertifikat

const getSertifikat = async (req,res) => {
    let result = await sertifikat.findAll({
        include: [
            "siswa"
        ]
    })
    res.json(result)
}

const getSertifikatSiswa = async (req,res) => {
    let param = { nis: req.params.nis}
    let result = await sertifikat.findAll({
        where: param,
        include: [
            "siswa"
        ]
    })
    res.json(result)
}

const getSertifikatById = async (req,res) => {
    await sertifikat.findOne({ where: {id_sertifikat: req.params.id}})
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

const saveSertifikat = async (req,res) => {
    let data = {
        nis : req.body.nis,
        judul : req.body.judul,
        lomba : req.body.lomba,
        cover : req.body.cover
    }

    sertifikat.create(data)
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

const updateSertifikat = async (req,res) => {
    let param = {
        id_sertifikat : req.params.id
    }
    let data = {
        nis : req.body.nis,
        judul : req.body.judul,
        lomba : req.body.lomba,
        cover : req.body.cover
    }
    sertifikat.update(data, {where: param})
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

const deleteSertifikat = async (req,res) => {
    let param = {
        id_sertifikat : req.params.id
    }
    sertifikat.destroy({where: param})
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



module.exports = {getSertifikat, getSertifikatSiswa, getSertifikatById, saveSertifikat, updateSertifikat, deleteSertifikat}