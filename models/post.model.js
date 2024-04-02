const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
        }
    }

    Post.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        explanation: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        create_date: {
            type: Sequelize.DATE,
            allowNull: false,
            default: Sequelize.NOW
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: true
        },
        post_photo_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: "post_photo",
                key: "id"
            }
        }
    }, {
        sequelize,
        modelName: "post",
        tableName: "post",
        timestamps: false
    });
    return Post;
}