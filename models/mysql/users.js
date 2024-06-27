const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define(
        'users',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
            },
            email: {
                type: DataTypes.STRING,
                isEmail: true,
            },
            password: {
                type: DataTypes.STRING,
            },
            role: {
                type: DataTypes.ENUM(['user', 'admin']),
            }
        },
        {
            timestamps: true
        },
    )
}