const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        static associate(models) {
            Location.hasMany(models.User, {
                foreignKey: 'locationId',
                as: 'user'
            })
        }
    }

    Location.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        province: {
            type: Sequelize.STRING,
            allowNull: false
        }

    }, {
        sequelize,
        modelName: 'location',
        tableName: 'location',
        timestamps: false
    })
}