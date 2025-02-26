const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
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
        modelName: "PostLike",
        tableName: "post_like",
        timestamps: false
    });
    return PostLike;
}