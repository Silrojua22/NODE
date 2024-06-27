const mongoose = require('mongoose');
const deleteMongoose = require('mongoose-delete');


const UserScheme = mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            select: false,
        },
        role: {
            type: ["user, admin"],
            default: "user",
        }
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

UserScheme.plugin(deleteMongoose, { overrideMethos: "all" })
module.exports = mongoose.model("users", UserScheme);