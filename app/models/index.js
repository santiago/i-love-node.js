module.exports = function(sequelize) {
    return {
        User: sequelize.import(__dirname + '/User'),
        School: sequelize.import(__dirname + '/School')
    }
}