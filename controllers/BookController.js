const { ObjectId } = require('mongodb');
const book = require('../models/book');

exports.index = async (req, res) => {
    const books = await book.find();
    res.json(books);
}

exports.store = async (req, res) => {
    try {
        await book.create(req.body);
        res.status(201).json({data:'Book is stored!'})
    } catch (error) {
        res.json(error.errors);
    }
}

exports.show = async (req, res) => {
    const _id = new ObjectId(req.params.id)
    const books = await book.find({_id});
    res.json(books);
}

exports.update = async (req, res) => {
    const _id = new ObjectId(req.params.id)
    await book.updateOne({_id},{$set : req.body});
    res.json({data:`Single Book of ID ${req.params.id} is Updated`})
}

exports.delete = async (req, res) => {
    const _id = new ObjectId(req.params.id)
    await book.deleteOne({_id});
    res.status(204).json();
}