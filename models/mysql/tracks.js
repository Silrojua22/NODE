const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db');


module.exports = (sequelize) => {
    sequelize.define(
        'tracks',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            album: {
                type: DataTypes.STRING,
            },
            cover: {
                type: DataTypes.STRING,

            },
            artist_name: {
                type: DataTypes.STRING,
            },
            artist_nickname: {
                type: DataTypes.STRING,
            },
            artist_name: {
                type: DataTypes.STRING,
            },
            artist_nationality: {
                type: DataTypes.STRING,
            },
            duration_start: {
                type: DataTypes.INTEGER,
            },
            duration_end: {
                type: DataTypes.INTEGER,
            },
            mediaId: {
                type: DataTypes.STRING,
            },

        },
        {
            timestamps: true
        },
    )
}