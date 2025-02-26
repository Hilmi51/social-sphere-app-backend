const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
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
        like_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        comment_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "comment",
                key: "id"
            }
        },
    }, {
        sequelize,
        modelName: "CommentLike",
        tableName: "comment_like",
        timestamps: false
    });
    return CommentLike;
}