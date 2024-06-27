const mongoose = require('mongoose');
const deleteMongoose = require('mongoose-delete');


const StorageScheme = mongoose.Schema(
    {
        url: {
            type: String,
        },
        filename: {
            type: String,
        }
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

StorageScheme.plugin(deleteMongoose, { overrideMethos: "all" })
module.exports = mongoose.model("storage", StorageScheme);