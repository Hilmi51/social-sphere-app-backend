const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
    class Project extends Model {
        static associate(models) {
        }
    }

    Project.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        code: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: generateRandomValue(4),
            unique: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        media_link: {
            type: Sequelize.STRING,
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
        modelName: 'Project',
        tableName: 'project',
        timestamps: false
    });

    function generateRandomValue(length) {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    return Project;
}