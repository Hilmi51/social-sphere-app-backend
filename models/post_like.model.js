const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PostLike extends Model {
        static associate(models) {
        }
    }

    PostLike.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        like_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        liked: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        post_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "post",
                key: "id"
            }
        },
    }, {
        sequelize,
        modelName: "post_like",
        tableName: "post_like",
        timestamps: false
    });

    return PostLike;
}