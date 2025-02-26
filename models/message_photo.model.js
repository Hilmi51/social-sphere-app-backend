const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
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
        modelName: 'MessagePhoto',
        tableName: 'message_photo',
        timestamps: false
    });
    return MessagePhoto;
}