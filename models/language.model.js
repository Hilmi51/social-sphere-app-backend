const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Language extends Model {
        static associate(models) {
        }
    }

    Language.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        level: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: "language",
        tableName: "language",
        timestamps: false
    });
    return Language;
}