const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class MessagePhoto extends Model {
        static associate(models) {
        }
    }

    MessagePhoto.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        photo_url: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'message_photo',
        tableName: 'message_photo',
        timestamps: false
    })
}