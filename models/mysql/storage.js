// const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('storage',
        {
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            filename: {
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: true,
        },)
}



