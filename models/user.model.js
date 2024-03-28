const Sequelize = require("sequelize");
const {Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
        }
    }

    User.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        uuid: {
            type: Sequelize.RANGE(Sequelize.INTEGER),
            allowNull: false,
            unique: true
        },
        nicname: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.ENUM('female', 'male'),
            allowNull: false
        },
        biography: {
            type: Sequelize.STRING(30),
            allowNull: true
        },
        profile_link: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid e-mail address"]
        },
        phone_number: {
            type: Sequelize.STRING(11),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        profile_photo_url: {
            type: Sequelize.STRING,
            allowNull: true
        },
        birth_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        create_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        phone_verification: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        email_verification: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        role: {
            type: Sequelize.ENUM('admin', 'user', 'delete'),
            allowNull: false,
            defaultValue: 'user'
        },
        language_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            reference: {
                model: 'language',
                key: 'id'
            }
        },
        location_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            reference: {
                model: 'location',
                key: 'id'
            }
        },
        project_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            reference: {
                model: 'project',
                key: 'id'
            }
        },
        post_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            reference: {
                model: 'post',
                key: 'id'
            }
        },
        comment_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            reference: {
                model: 'post_comment',
                key: 'id'
            }
        },
        message_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            reference: {
                model: 'message',
                key: 'id'
            }
        },
        post_like_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            reference: {
                model: 'post_like',
                key: 'id'
            }
        },
        comment_like_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            reference: {
                model: 'comment_like',
                key: 'id'
            }
        },
        post_save_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            reference: {
                model: 'post_save',
                key: 'id'
            }
        },
    }, {
        sequelize,
        modelName: "user",
        tableName: "user",
        timestamps: false
    })
}