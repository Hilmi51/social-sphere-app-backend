const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PostPhoto extends Model {
        static accessor(models) {
        }
    }

    PostPhoto.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        photo_url: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: "post_photo",
        tableName: "post_photo",
        timestamps: false
    })
}