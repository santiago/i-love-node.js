var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    sequelize.define('User', {
        name: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        }
    })
}