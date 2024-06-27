const { matchedData, body } = require('express-validator');
const Tracks = require('../models/nosql/tracks')
const { handleHttpError } = require('../utils/handleHttpError.js')

const getItems = async (req, res) => {
    try {
        const user = req.user
        const data = await Tracks.find();
        res.send({ data, user });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }
};



const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Tracks.findById(id);
        if (!data) {
            return handleHttpError(res, "ERROR_GET_ITEM_NOT_FOUND");
        }
        res.send({ data });
    } catch (error) {
        console.error(error);
        handleHttpError(res, "ERROR_GET_ITEM");
    }
};

const updateItems = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await Tracks.findOneAndUpdate(
            { _id: id },
            body,
            { new: true, runValidators: true }
        );

        res.send({ data });
    } catch (error) {
        console.error(error);
        handleHttpError(res, 'ERROR_UPDATE_ITEMS');
    }
};


const createItems = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await Tracks.create(body)
        res.status(200).send({ data })
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS')

    }
};

const deleteItems = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Tracks.delete({ _id: id });
        if (!data) {
            return handleHttpError(res, "ERROR_DELETE_ITEMS");
        }
        res.send({ data });
    } catch (error) {
        console.error(error);
        handleHttpError(res, "ERROR_DELETE_ITEMS");
    }
};

module.exports = { getItems, updateItems, createItems, deleteItems, getItem };
