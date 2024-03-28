const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProjectCategory extends Model {
        static associate(models) {
        }
    }

    ProjectCategory.init({
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
        modelName: 'project_category',
        tableName: 'project_category',
        underscored: true
    });
}