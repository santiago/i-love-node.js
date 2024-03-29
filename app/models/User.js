module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        }
    }, 
    {
        instanceMethods: {
            validPassword: function(password) {
                if (password == this.password) {
                    return true;
                }
                return false;
            }
        }
    })
}