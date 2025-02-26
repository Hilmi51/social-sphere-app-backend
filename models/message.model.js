const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
    class Message extends Model {
        static associate(models) {
        }
    }

    Message.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        message_content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        send_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        message_photo_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: "message_photo",
                key: "id"
            }
        },
        buyer_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },

    }, {
        sequelize,
        modelName: "Message",
        tableName: "message",
        timestamps: false
    });
    return Message;
}