const mongoose = require('mongoose');
const deleteMongoose = require('mongoose-delete');


const TracksScheme = mongoose.Schema(
    {
        name: {
            type: String,
        },
        album: {
            type: Number,
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            }
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                Number
            },
            mediaId: {
                type: mongoose.Types.ObjectId,
            }
        },


    },
    {
        timestamps: true,
        versionkey: false,
    }
);

TracksScheme.plugin(deleteMongoose, { overrideMethos: "all" })
module.exports = mongoose.model("tracks", TracksScheme);