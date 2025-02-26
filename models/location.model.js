const Sequelize = require('sequelize');
const {Model} = require('sequelize');

module.exports = (sequelize) => {
    class Location extends Model {
        static associate(models) {
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
        modelName: 'Location',
        tableName: 'location',
        timestamps: false
    });
    return Location;
}