const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
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
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: "Language",
        tableName: "language",
        timestamps: false
    });
    return Language;
}