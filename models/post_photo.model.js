const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PostPhoto extends Model {
        static accessor(models) {
            this.belongsTo(models.Post, {
                foreignKey: "post_id",
                as: "post"
            })
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