const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TechnologyCategory extends Model {
        static associate(models) {
            TechnologyCategory.hasMany(models.UsedTechnology, {
                foreignKey: 'technology_category_id',
                as: 'used_technologies'
            });
        }
    }

    TechnologyCategory.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'technology_category',
        tableName: 'technology_category',
        underscored: true
    });
}