const Sequelize = require("sequelize");
const {Model} = require("sequelize");

module.exports = (sequelize) => {
    class UsedTechnology extends Model {
        static associate(models) {
        }
    }

    UsedTechnology.init({
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
        modelName: "UsedTechnology",
        tableName: "used_technology",
        timestamps: false
    });
    return UsedTechnology;
}