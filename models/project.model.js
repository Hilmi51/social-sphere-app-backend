const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Project extends Model {
        static associate(models) {
        }
    }

    Project.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        code: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING(30),
            allowNull: true
        },
        media_link: {
            type: Sequelize.STRING(),
            allowNull: true
        },
        started_date: {
            type: Sequelize.DATE,
            allowNull: true
        },
        finished_date: {
            type: Sequelize.DATE,
            allowNull: true
        },
        status: {
            type: Sequelize.ENUM('continues', 'finished'),
            allowNull: false
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'project_category',
                key: 'id'
            }
        },
        used_technology_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'used_technology',
                key: 'id'
            }
        },

    }, {
        sequelize,
        modelName: 'project',
        tableName: 'project',
        timestamps: false
    })
}