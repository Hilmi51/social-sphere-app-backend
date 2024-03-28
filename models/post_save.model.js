const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
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
        saved: {
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
        }
    }, {
        sequelize,
        modelName: "post_save",
        tableName: "post_save",
        timestamps: false
    });
}