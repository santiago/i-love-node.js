module.exports = function(sequelize, DataTypes) {
    return sequelize.define('School', {
        name: DataTypes.STRING,
    })
}