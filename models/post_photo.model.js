const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
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
        modelName: "PostPhoto",
        tableName: "post_photo",
        timestamps: false
    });
    return PostPhoto;
}