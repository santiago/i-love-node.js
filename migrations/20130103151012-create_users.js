module.exports = {
    up: function(migration, DataTypes) {
        migration.createTable('users', {
            name: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
                allowNull: false
            }
        }, 
        {
            charset: 'utf8'
        })
    },
    down: function(migration) {
        migration.dropTable('users');
    }
}