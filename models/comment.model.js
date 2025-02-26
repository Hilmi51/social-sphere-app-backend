const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
    class PostComment extends Model {
        static associate(models) {
        }
    }

    PostComment.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        explanation: {
            type: Sequelize.STRING,
            allowNull: false
        },
        create_date: {
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
        modelName: "Comment",
        tableName: "comment",
        timestamps: false
    });
    return PostComment;
}