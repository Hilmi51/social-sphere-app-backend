const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
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
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'ProjectCategory',
        tableName: 'project_category',
        timestamps: false
    });
    return ProjectCategory;
}