const Sequelize = require("sequelize");
const {Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
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
            type: Sequelize.STRING(20),
            allowNull: false
        },
        technology_category_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: "technology_category",
                key: "id"
            }
        }
    }, {
        sequelize,
        modelName: "used_technology",
        tableName: "used_technology",
        timestamps: false
    });
    return UsedTechnology;
}