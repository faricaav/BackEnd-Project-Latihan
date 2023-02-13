const mongoose = require('mongoose');
const user = require('../models/users');
const redis = require('../library/redis')

const getUser = async (req, res) => {
    const redis_key = "get_user";
    const { reply } = await redis.get(redis_key);

    try {
        const users = await user.find();
        const dataFromDb = (users);
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
 
const getUserById = async (req, res) => {
    try {
        const users = await user.findById(req.params.id);
        res.json(users);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
const saveUser = async (req, res) => {
    const {name, email, username, password} = req.body
    const users = new user({name, email, username, password});
    try {
        const insertedUser = await users.save(users);
        res.status(201).json(insertedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
const updateUser = async (req, res) => {
    const {name, email, username, password} = req.body
    try {
        const updatedUser = await user.updateOne({_id:req.params.id}, {$set: {name, email, username, password}});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await user.deleteOne({_id:req.params.id});
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {getUser, getUserById, saveUser, updateUser, deleteUser}