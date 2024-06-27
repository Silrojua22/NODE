const { storageModel } = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;
const handleHttpError = require('../utils/handleHttpError.js')
const fs = require('fs');
//const MEDIA_PATH = `${__dirname}/storage`;
const MEDIA_PATH = `${process.cwd()}/storage`;

console.log("ruta => ", MEDIA_PATH);
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find();
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_ITEMS');
    }
};

const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await storageModel.findById(id);
        if (!data) {
            return handleHttpError(res, "ERROR_GET_ITEM_NOT_FOUND");
        }
        res.send({ data });
    } catch (error) {
        console.error(error);
        handleHttpError(res, "ERROR_GET_ITEM");
    }
}


const createItems = async (req, res) => {

    try {
        const { body, file } = req;
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`,
        }
        const data = await storageModel.create(fileData)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEM,")
    }

};

const deleteItems = async (req, res) => {
    try {
        const { id } = req.params;
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne({ _id: id })
        const { filename } = dataFile;
        const filepath = `${MEDIA_PATH}/${filename}`
        console.log(filepath);
        fs.unlinkSync(filepath);
        const data = {
            filepath,
            deleted: 1
        }
        res.send({ data });
    } catch (error) {
        console.error(error);
        handleHttpError(res, "ERROR_GET_ITEM");
    }
};

module.exports = { getItems, createItems, deleteItems, getItem };


