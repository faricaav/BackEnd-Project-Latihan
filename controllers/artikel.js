const mongoose = require('mongoose');
const artikel = require('../models/artikel');
const redis = require('../library/redis')

const getArtikel = async (req, res) => {
    const redis_key = "get_artikel";
    const { reply } = await redis.get(redis_key);

    try {
        const artikels = await artikel.find();
        const dataFromDb = (artikels);
        // res.json(artikels);
        if (reply) {
            // cache available
            res.status(200).send(reply);
        } else {
            // set redis cache
            redis.set(redis_key, JSON.stringify(dataFromDb));
        
            res.status(200).send(dataFromDb);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
const getArtikelById = async (req, res) => {
    try {
        const artikels = await artikel.findById(req.params.id);
        res.json(artikels);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
const saveArtikel = async (req, res) => {
    const {karya, tanggal_publish, isi} = req.body
    const artikels = new artikel({karya, tanggal_publish, isi});
    try {
        const insertedArtikel = await artikels.save(artikels);
        res.status(201).json(insertedArtikel);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
const updateArtikel = async (req, res) => {
    const {karya, tanggal_publish, isi} = req.body
    try {
        const updatedArtikel = await artikel.updateOne({_id:req.params.id}, {$set: {karya, tanggal_publish, isi}});
        res.status(200).json(updatedArtikel);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
const deleteArtikel = async (req, res) => {
    try {
        const deletedArtikel = await artikel.deleteOne({_id:req.params.id});
        res.status(200).json(deletedArtikel);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {getArtikel, getArtikelById, saveArtikel, updateArtikel, deleteArtikel}