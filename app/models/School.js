var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    sequelize.define('User', {
        name: Sequelize.STRING
    })
}