const Sequelize = require("sequelize");
const {Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class UsedTechnology extends Model {
        static associate(models) {
            UsedTechnology.belongsTo(models.TechnologyCategory, {
                foreignKey: "technology_category_id",
                as: "technology_category"
            });
            UsedTechnology.belongsToMany(models.Project, {
                through: "project_used_technology",
                as: "projects",
                foreignKey: "used_technology_id",
                otherKey: "project_id"
            });
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
}