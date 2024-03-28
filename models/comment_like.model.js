const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CommentLike extends Model {
        static associate(models) {
        }
    }

    CommentLike.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        liked_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        liked: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        comment_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "post_comment",
                key: "id"
            }
        },
    }, {
        sequelize,
        modelName: "comment_like",
        tableName: "comment_like",
        timestamps: false
    })
}