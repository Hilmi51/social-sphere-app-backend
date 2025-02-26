const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
    class PostSave extends Model {
        static associate(models) {
        }
    }

    PostSave.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        post_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "post",
                key: "id"
            }
        }
    }, {
        sequelize,
        modelName: "PostSave",
        tableName: "post_save",
        timestamps: false
    });
    return PostSave;
}